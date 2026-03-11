import { useEffect, useState } from "react"

export type DetectedOS = "mac" | "windows" | "android" | "other"
export type MacArch = "arm64" | "x64"

export function detectOS(): DetectedOS {
  if (typeof navigator === "undefined") return "other"
  const ua = navigator.userAgent
  if (ua.includes("Android")) return "android" 
  if (ua.includes("Mac")) return "mac"
  if (ua.includes("Windows")) return "windows"
  return "other"
}

interface NavigatorUAData {
  getHighEntropyValues(hints: string[]): Promise<{ architecture?: string }>
}

export async function detectMacArch(): Promise<MacArch> {
  if (typeof navigator === "undefined") return "arm64"

 
  const uaData = (navigator as Navigator & { userAgentData?: NavigatorUAData })
    .userAgentData

  if (uaData?.getHighEntropyValues) {
    try {
      const values = await uaData.getHighEntropyValues(["architecture"])
      if (values.architecture) {
        return values.architecture === "arm" ? "arm64" : "x64"
      }
    } catch {
      // userAgentData not supported, fall through to WebGL detection
    }
  }

   try {
    const canvas = document.createElement("canvas")
    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null)
    if (gl) {
      const ext = gl.getExtension("WEBGL_debug_renderer_info")
      if (ext) {
        const renderer = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) as string
        if (renderer.includes("Apple M")) return "arm64"
        if (renderer.includes("Intel")) return "x64"
      }
    }
  } catch {
    // WebGL detection failed, use default
  }

   return "arm64"
}

export function useDetectedOS(): { os: DetectedOS; macArch: MacArch } {
  const [state, setState] = useState<{ os: DetectedOS; macArch: MacArch }>({
    os: "other",
    macArch: "arm64",
  })

  useEffect(() => {
    const os = detectOS()
    detectMacArch().then((macArch) => {
      setState({ os, macArch })
    })
  }, [])

  return state
}