import { Lightbulb, PenTool, Triangle, Ruler, GitMerge, CheckCircle } from 'lucide-react';

export const steps = [
  {
    title: "第一步：解题思路",
    icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
    desc: "利用折叠全等性质，将问题转化为直角三角形中的边角关系。",
    detail: "本题是典型的折叠问题，核心在于“折叠前后的图形全等”，即 $\\triangle AFG \\cong \\triangle EFG$。\n\n因此，$\\angle EFG = \\angle AFG$。\n\n要求 $\\tan \\angle EFG$，只需在直角三角形中求出 $\\tan \\angle AFG$ 的值。我们可以通过作辅助线构建直角三角形来求解。",
    tts: "同学们，我们来看这道题。这是一道典型的折叠问题。折叠问题的核心是什么呢？就是折叠前后的图形是完全重合的，也就是全等。所以三角形 AFG 和三角形 EFG 是全等的。题目要求 tan 角 EFG，我们只需要求出 tan 角 AFG 就可以了。这节课我们用纯几何的方法，通过作辅助线来巧妙求解。"
  },
  {
    title: "第二步：作辅助线 EB",
    icon: <PenTool className="w-5 h-5 text-blue-500" />,
    desc: "连接 EB，证明 EB 垂直于 AB。",
    detail: "连接 $EB$。在 $\\triangle BCE$ 中，$BC = 2$，$E$ 是 $CD$ 中点，所以 $CE = 1$。\n\n因为菱形 $\\angle C = 60^\\circ$，由余弦定理（或作垂线）可得 $BE = \\sqrt{3}$，且 $\\angle CEB = 90^\\circ$。\n\n因为 $AB \\parallel CD$，所以 $EB \\perp AB$，即 $\\angle EBF = 90^\\circ$。",
    tts: "首先，我们来作一条关键的辅助线，连接 EB。在三角形 BCE 中，BC 等于 2，CE 等于 1，角 C 是 60 度。这是一个非常经典的直角三角形比例，我们可以算出 BE 等于根号 3，并且 BE 垂直于 CD。因为菱形的对边平行，所以 BE 也垂直于 AB，也就是说，角 EBF 是一个直角。"
  },
  {
    title: "第三步：勾股定理求 AF",
    icon: <Triangle className="w-5 h-5 text-green-500" />,
    desc: "在 Rt△EBF 中利用勾股定理求出 AF 的长度。",
    detail: "设 $AF = x$，由折叠性质可知 $EF = AF = x$。\n\n那么 $FB = AB - AF = 2 - x$。\n\n在 Rt$\\triangle EBF$ 中，根据勾股定理：\n$$EF^2 = EB^2 + FB^2$$\n$$x^2 = (\\sqrt{3})^2 + (2 - x)^2$$\n$$x^2 = 3 + 4 - 4x + x^2$$\n解得 $x = \\frac{7}{4}$，即 $AF = \\frac{7}{4}$。",
    tts: "接下来，我们设 AF 的长度为 x。因为折叠，EF 也等于 x。那么 FB 就等于 2 减去 x。在直角三角形 EBF 中，我们利用勾股定理，斜边 EF 的平方等于两条直角边的平方和。列出方程，解得 x 等于四分之七。这样我们就求出了 AF 的长度。"
  },
  {
    title: "第四步：求 AE 的长",
    icon: <Ruler className="w-5 h-5 text-purple-500" />,
    desc: "在 Rt△ABE 中利用勾股定理求出 AE 的长度。",
    detail: "连接 $AE$。在 Rt$\\triangle ABE$ 中，已知 $AB = 2$，$BE = \\sqrt{3}$。\n\n根据勾股定理：\n$$AE = \\sqrt{AB^2 + BE^2}$$\n$$AE = \\sqrt{2^2 + (\\sqrt{3})^2} = \\sqrt{7}$$",
    tts: "然后，我们连接 AE。在直角三角形 ABE 中，我们已经知道了 AB 等于 2，BE 等于根号 3。再次使用勾股定理，很容易就能算出斜边 AE 的长度为根号 7。"
  },
  {
    title: "第五步：垂直平分线求 AM",
    icon: <GitMerge className="w-5 h-5 text-indigo-500" />,
    desc: "利用折叠性质，折痕 FG 是 AE 的垂直平分线。",
    detail: "设折痕 $FG$ 交 $AE$ 于点 $M$。\n\n根据折叠的对称性，折痕 $FG$ 垂直平分线段 $AE$。\n\n因此，$\\angle AMF = 90^\\circ$，且 $AM = \\frac{1}{2}AE = \\frac{\\sqrt{7}}{2}$。",
    tts: "关键的一步来了。根据折叠的对称性，折痕 FG 一定是线段 AE 的垂直平分线。我们设交点为 M。那么角 AMF 就是 90 度，并且 AM 的长度等于 AE 的一半，也就是二分之根号七。这就为我们构建了包含角 AFG 的直角三角形。"
  },
  {
    title: "第六步：计算正切值",
    icon: <CheckCircle className="w-5 h-5 text-rose-500" />,
    desc: "在 Rt△AMF 中计算 tan∠AFG 的值。",
    detail: "在 Rt$\\triangle AMF$ 中，已知斜边 $AF = \\frac{7}{4}$，直角边 $AM = \\frac{\\sqrt{7}}{2}$。\n\n根据勾股定理求出 $FM$：\n$$FM = \\sqrt{AF^2 - AM^2} = \\sqrt{(\\frac{7}{4})^2 - (\\frac{\\sqrt{7}}{2})^2} = \\frac{\\sqrt{21}}{4}$$\n\n所以 $\\tan \\angle EFG = \\tan \\angle AFG = \\frac{AM}{FM} = \\frac{\\frac{\\sqrt{7}}{2}}{\\frac{\\sqrt{21}}{4}} = \\frac{2\\sqrt{3}}{3}$。",
    tts: "最后一步！在直角三角形 AMF 中，我们已经知道了斜边 AF 和直角边 AM，用勾股定理算出另一条直角边 FM 等于四分之根号二十一。题目要求 tan 角 AFG，就是对边 AM 比上邻边 FM。代入数据计算，最后得出 tan 角 AFG 等于 三分之二倍根号三。因为折叠全等，所以 tan 角 EFG 的值也是 三分之二倍根号三。这道题就解出来啦！"
  }
];
