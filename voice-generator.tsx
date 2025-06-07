"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2, Download, Mic, Sparkles, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function VoiceGenerator() {
  const [content, setContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const { toast } = useToast()

  const handleVoiceGeneration = async () => {
    if (!content.trim()) {
      toast({
        title: "提示",
        description: "请输入要配音的内容",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    setAudioUrl(null)

    try {
      const response = await fetch("/api/voice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: content }),
      })

      const data = await response.json()

      if (data.success) {
        setAudioUrl(data.url)
        toast({
          title: "配音完成 ✨",
          description: "音频已生成，可以下载了！",
        })
      } else {
        toast({
          title: "配音失败",
          description: data.error || "配音生成失败，请稍后重试",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("配音请求失败：", error)
      toast({
        title: "网络错误",
        description: "请检查网络连接后重试",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = async () => {
    if (!audioUrl) return

    setIsDownloading(true)

    try {
      const response = await fetch(`/api/audio?url=${encodeURIComponent(audioUrl)}`)

      if (!response.ok) {
        throw new Error("下载失败")
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `AI配音_${new Date().toLocaleString().replace(/[/:]/g, "-")}.mp3`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)

      toast({
        title: "下载成功 🎉",
        description: "音频文件已保存到本地",
      })
    } catch (error) {
      console.error("下载失败：", error)
      toast({
        title: "下载失败",
        description: "请稍后重试",
        variant: "destructive",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-lg">
        {/* 主标题 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
            曼波 配音
          </h1>
          <p className="text-gray-600 text-lg">让文字拥有声音的魔力</p>
        </div>

        {/* 主卡片 */}
        <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-2xl shadow-purple-100/50">
          <CardHeader className="pb-6">
            <CardTitle className="text-center text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
              <Mic className="w-5 h-5 text-violet-500" />
              文本转语音
            </CardTitle>
            <CardDescription className="text-center text-gray-600">输入您想要配音的文本内容</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* 输入区域 */}
            <div className="space-y-3">
              <Label htmlFor="content" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                📝 配音内容
              </Label>
              <div className="relative">
                <Input
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="请输入要配音的内容..."
                  className="w-full h-12 px-4 text-base border-2 border-gray-200 rounded-xl focus:border-violet-400 focus:ring-violet-400/20 transition-all duration-200"
                  disabled={isLoading}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {content.length}/500
                </div>
              </div>
            </div>

            {/* 生成按钮 */}
            <Button
              onClick={handleVoiceGeneration}
              disabled={isLoading || !content.trim()}
              className="w-full h-12 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  AI 正在配音中...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  开始配音
                </>
              )}
            </Button>

            {/* 下载区域 */}
            {audioUrl && (
              <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">配音生成成功！</span>
                  </div>
                </div>

                <Button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="w-full h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {isDownloading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      下载中...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-5 w-5" />
                      下载音频文件
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-green-600 mt-3">🎵 高质量 MP3 格式，即刻保存到本地</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 底部信息 */}
        <div className="text-center mt-8 space-y-2">
          <p className="text-sm text-gray-500">✨ 由先进的 AI 技术驱动，为您提供自然流畅的语音合成</p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
            <span>🚀 快速生成</span>
            <span>🎯 高质量音频</span>
            <span>💫 简单易用</span>
          </div>
        </div>
      </div>
    </div>
  )
}
