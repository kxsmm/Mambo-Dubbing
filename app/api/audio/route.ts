import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const audioUrl = searchParams.get("url")

    if (!audioUrl) {
      return NextResponse.json({ error: "缺少音频URL参数" }, { status: 400 })
    }

    const response = await fetch(audioUrl)

    if (!response.ok) {
      return NextResponse.json({ error: "无法获取音频文件" }, { status: response.status })
    }

    const audioBuffer = await response.arrayBuffer()

    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": audioBuffer.byteLength.toString(),
        "Cache-Control": "public, max-age=3600",
        "Content-Disposition": "attachment; filename=ai-voice.mp3",
      },
    })
  } catch (error) {
    console.error("音频代理失败：", error)
    return NextResponse.json({ error: "音频服务暂时不可用" }, { status: 500 })
  }
}
