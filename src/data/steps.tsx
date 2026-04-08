import { Lightbulb, Map, Crosshair, PenTool, GitMerge, CheckCircle } from 'lucide-react';

export const steps = [
  {
    title: "第一步：解题思路",
    icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
    desc: "利用折叠全等性质，将问题转化为求已知直线夹角。",
    detail: "本题是典型的折叠问题，核心在于“折叠前后的图形全等”，即 $\\triangle AFG \\cong \\triangle EFG$。\n\n因此，求 $\\tan \\angle EFG$ 转化为求 $\\tan \\angle AFG$。\n\n为了方便计算，我们可以建立平面直角坐标系，利用解析几何的方法求解。",
    tts: "同学们，我们来看这道题。这是一道典型的折叠问题。折叠问题的核心是什么呢？就是折叠前后的图形是完全重合的，也就是全等。所以三角形 AFG 和三角形 EFG 是全等的。题目要求 tan 角 EFG，我们只需要求出 tan 角 AFG 就可以了。为了方便计算，这节课我们用建立平面直角坐标系的方法来巧妙求解。"
  },
  {
    title: "第二步：建立坐标系",
    icon: <Map className="w-5 h-5 text-blue-500" />,
    desc: "以菱形中心为原点建立直角坐标系。",
    detail: "以菱形对角线交点为原点 $O$，对角线 $AC$、$BD$ 所在直线分别为 $x$ 轴、$y$ 轴。\n\n因为菱形边长为 2，$\\angle C = 60^\\circ$，所以 $OA = OC = \\sqrt{3}$，$OB = OD = 1$。\n\n各点坐标：\n- $A(-\\sqrt{3}, 0)$\n- $B(0, -1)$\n- $C(\\sqrt{3}, 0)$\n- $D(0, 1)$",
    tts: "首先，我们来建立坐标系。以菱形对角线的交点为原点 O，对角线 AC 和 BD 所在的直线分别为 x 轴和 y 轴。因为菱形边长为 2，角 C 是 60 度，利用三角函数很容易算出 OA 等于根号 3，OB 等于 1。这样我们就能写出 A、B、C、D 四个顶点的坐标了。"
  },
  {
    title: "第三步：求点 E 的坐标",
    icon: <Crosshair className="w-5 h-5 text-green-500" />,
    desc: "利用中点坐标公式求出点 E 的位置。",
    detail: "已知点 $E$ 是 $CD$ 的中点。\n\n利用中点坐标公式：\n$$x_E = \\frac{\\sqrt{3}+0}{2} = \\frac{\\sqrt{3}}{2}$$\n$$y_E = \\frac{0+1}{2} = \\frac{1}{2}$$\n\n所以点 $E$ 的坐标为 $(\\frac{\\sqrt{3}}{2}, \\frac{1}{2})$。",
    tts: "接下来看点 E。题目说点 E 是 CD 的中点。既然我们已经有了 C 和 D 的坐标，直接套用中点坐标公式，横坐标相加除以 2，纵坐标相加除以 2，就能轻松算出点 E 的坐标是 二分之根号三，二分之一。"
  },
  {
    title: "第四步：求折痕 FG 的方程",
    icon: <PenTool className="w-5 h-5 text-purple-500" />,
    desc: "折痕是线段 AE 的垂直平分线。",
    detail: "折痕 $FG$ 是线段 $AE$ 的垂直平分线。\n\n线段 $AE$ 的中点 $M$ 坐标为 $(-\\frac{\\sqrt{3}}{4}, \\frac{1}{4})$。\n直线 $AE$ 的斜率 $k_{AE} = \\frac{1/2 - 0}{\\sqrt{3}/2 - (-\\sqrt{3})} = \\frac{\\sqrt{3}}{9}$。\n\n所以折痕 $FG$ 的斜率 $k_{FG} = -\\frac{1}{k_{AE}} = -3\\sqrt{3}$。\n\n利用点斜式得到 $FG$ 的方程：\n$$y - \\frac{1}{4} = -3\\sqrt{3}(x + \\frac{\\sqrt{3}}{4})$$\n化简得 $y = -3\\sqrt{3}x - 2$。",
    tts: "关键的一步来了。折痕 FG 其实就是线段 AE 的垂直平分线。我们先算出 AE 的中点 M 的坐标，再算出 AE 的斜率。因为垂直，所以 FG 的斜率和 AE 的斜率乘积为负一，算出 FG 的斜率是 负三倍根号三。有了斜率和经过的点 M，就能写出折痕 FG 的直线方程了。"
  },
  {
    title: "第五步：求点 F 的坐标",
    icon: <GitMerge className="w-5 h-5 text-indigo-500" />,
    desc: "联立直线 FG 和 AB 的方程求交点。",
    detail: "点 $F$ 是直线 $FG$ 与边 $AB$ 的交点。\n\n直线 $AB$ 过 $A(-\\sqrt{3}, 0)$ 和 $B(0, -1)$，斜率 $k_{AB} = -\\frac{\\sqrt{3}}{3}$。\n直线 $AB$ 方程为 $y = -\\frac{\\sqrt{3}}{3}x - 1$。\n\n联立 $FG$ 和 $AB$ 的方程：\n$$-3\\sqrt{3}x - 2 = -\\frac{\\sqrt{3}}{3}x - 1$$\n\n解得 $x = -\\frac{\\sqrt{3}}{8}$，代入得 $y = -\\frac{7}{8}$。\n所以 $F(-\\frac{\\sqrt{3}}{8}, -\\frac{7}{8})$。",
    tts: "现在我们来找点 F。点 F 在边 AB 上，也就是直线 FG 和直线 AB 的交点。我们先写出直线 AB 的方程，然后把直线 FG 和直线 AB 的方程联立起来解方程组。解出来 x 和 y 的值，就是点 F 的坐标啦。"
  },
  {
    title: "第六步：计算正切值",
    icon: <CheckCircle className="w-5 h-5 text-rose-500" />,
    desc: "利用两直线夹角公式求出最终结果。",
    detail: "$\\angle AFG$ 是直线 $FG$ 与直线 $AB$ 的夹角。\n\n已知 $k_{FG} = -3\\sqrt{3}$，$k_{AB} = -\\frac{\\sqrt{3}}{3}$。\n\n利用夹角公式：\n$$\\tan \\angle AFG = \\left| \\frac{k_{FG} - k_{AB}}{1 + k_{FG} k_{AB}} \\right|$$\n$$= \\left| \\frac{-3\\sqrt{3} - (-\\sqrt{3}/3)}{1 + (-3\\sqrt{3})(-\\sqrt{3}/3)} \\right|$$\n$$= \\frac{2\\sqrt{3}}{3}$$\n\n所以 $\\tan \\angle EFG = \\tan \\angle AFG = \\frac{2\\sqrt{3}}{3}$。",
    tts: "最后一步！角 AFG 其实就是直线 FG 和直线 AB 的夹角。我们已经知道了这两条直线的斜率，直接套用两直线夹角的正切公式。把斜率代入公式计算，最后得出 tan 角 AFG 等于 三分之二倍根号三。因为折叠全等，所以 tan 角 EFG 的值也是 三分之二倍根号三。这道题就解出来啦！"
  }
];
