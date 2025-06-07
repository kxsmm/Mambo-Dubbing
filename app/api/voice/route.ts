import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()

    if (!text || !text.trim()) {
      return NextResponse.json({ error: "请输入要配音的内容" }, { status: 400 })
    }

    const url = `https://api.milorapart.top/apis/mbAIsc?text=${encodeURIComponent(text)}`
    const response = await fetch(url)

    if (response.status === 200) {
      const data = await response.json()
      console.log("请求成功! 状态码：" + response.status + "\n", "下载链接：" + data.url)

      return NextResponse.json({
        success: true,
        url: data.url,
        message: "配音生成成功",
      })
    } else {
      console.error("请求错误，状态码：", response.status)
      return NextResponse.json(
        {
          success: false,
          error: `API请求失败，状态码：${response.status}`,
        },
        { status: response.status },
      )
    }
  } catch (error) {
    console.error("配音API调用失败：", error)
    return NextResponse.json(
      {
        success: false,
        error: "配音服务暂时不可用，请稍后重试",
      },
      { status: 500 },
    )
  }
}
