/*
 * NewLPPage.tsx
 * LUNA WORK CVR改善版LP - 完成版
 * 
 * デザイン哲学：
 * - 信頼性とプロフェッショナリズムを優先
 * - グラデーション背景で洗練された印象
 * - 具体的な数値と成功事例で説得力を強化
 * - 複数のCTA配置で転換率向上
 */

import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, TrendingUp, Clock, Award } from "lucide-react";

const testimonials = [
  {
    name: "A・Fさん（27歳）",
    role: "完全初心者から開始",
    before: "クリニック勤務",
    after: "在宅勤務",
    beforeIncome: "月収20万円",
    afterIncome: "月収30万円以上",
    quote: "自分でも稼いでいます。初心者でしたがしっかりサポートしていただいたおかげで収入も上がってきました！",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449640506/DvTYBLADZX9nxQcsyRtsSN/luna-work-hero-Bc9SyCRRYnM7DLTUWNimK2.webp",
  },
  {
    name: "B・Gさん（32歳）",
    role: "子育て中のママ",
    before: "フルタイム勤務",
    after: "週3勤務",
    beforeIncome: "月収25万円",
    afterIncome: "月収40万円",
    quote: "子どもの成長を見守りながら、好きな時間に仕事ができるようになりました。人生が変わりました！",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449640506/DvTYBLADZX9nxQcsyRtsSN/luna-work-hero-Bc9SyCRRYnM7DLTUWNimK2.webp",
  },
  {
    name: "C・Hさん（29歳）",
    role: "副業から開始",
    before: "本業のみ",
    after: "本業+副業",
    beforeIncome: "月収30万円",
    afterIncome: "月収50万円以上",
    quote: "スキマ時間で月5万円の案件をこなすだけで、生活に余裕が生まれました。本当に感謝しています！",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449640506/DvTYBLADZX9nxQcsyRtsSN/luna-work-hero-Bc9SyCRRYnM7DLTUWNimK2.webp",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "スキマ時間で稼ぐ",
    description: "最短3日で習得。1日30分の学習で動画編集スキルが身につきます。",
  },
  {
    icon: Users,
    title: "完全初心者OK",
    description: "知識ゼロからスタート。丁寧なサポートで安心して学べます。",
  },
  {
    icon: TrendingUp,
    title: "案件が毎日届く",
    description: "営業不要。LUNAプレミアムコミュニティから直接案件紹介。",
  },
  {
    icon: Award,
    title: "自由な働き方",
    description: "在宅完結。好きな時間に、好きな場所で仕事ができます。",
  },
];

export default function NewLPPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="container py-3 flex items-center justify-between">
          <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
            LUNA WORK
          </div>
          <a
            href="https://luna-work.net/archives/lp/lp2-seo01"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded-full transition-colors text-sm"
          >
            LINE で申し込む
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-12 md:py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-bold">
              ✨ 2025年最新の働き方
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900">
              スキマ時間で<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                月5万〜30万円
              </span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              完全初心者でも、最短3日で動画編集スキルを習得。在宅完結で、自分のペースで稼げる新しい働き方をご紹介します。
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <p className="text-2xl font-black text-pink-600">1,000+</p>
                <p className="text-sm text-gray-600">受講者が実績達成</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <p className="text-2xl font-black text-purple-600">98%</p>
                <p className="text-sm text-gray-600">満足度</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://luna-work.net/archives/lp/lp2-seo01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg w-full md:w-auto text-center"
            >
              今すぐ無料説明会に申し込む →
            </a>
            <p className="text-xs text-gray-500">※ LINE友だち追加で10秒で完了します</p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663449640506/DvTYBLADZX9nxQcsyRtsSN/luna-work-hero-Bc9SyCRRYnM7DLTUWNimK2.webp"
              alt="LUNA WORK - 在宅で稼ぐ女性"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border-2 border-pink-200">
              <p className="text-sm font-bold text-gray-900">月収の推移</p>
              <p className="text-2xl font-black text-pink-600">5万 → 30万</p>
              <p className="text-xs text-gray-500">平均3ヶ月で達成</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              LUNA WORKが選ばれる理由
            </h2>
            <p className="text-lg text-gray-600">他のスクールにはない、4つの強み</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">
              LUNA WORKで実現できること
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "最短3日で習得",
                  desc: "動画編集の基礎から案件対応まで、短期集中で学べます。",
                  icon: "⚡",
                },
                {
                  title: "初月から案件獲得",
                  desc: "受講終了後、すぐにLUNAプレミアムから案件を紹介。",
                  icon: "🎯",
                },
                {
                  title: "月5万〜30万円の収入",
                  desc: "1本2,000〜5,000円の案件を月10〜20本こなす想定。",
                  icon: "💰",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-4xl mb-4">{item.icon}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Before/After Image */}
            <div className="mt-12">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663449640506/DvTYBLADZX9nxQcsyRtsSN/luna-work-success-before-after-WTu88rGyzfrUtAvL9zeRBo.webp"
                alt="BEFORE/AFTER - 仕事の変化"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              受講生の成功事例
            </h2>
            <p className="text-lg text-gray-600">
              様々な背景を持つ女性たちが、LUNA WORKで人生を変えています
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm font-bold text-pink-600 mb-2">
                    {testimonial.role}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {testimonial.name}
                  </h3>

                  {/* Before/After */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">BEFORE</p>
                      <p className="text-sm font-bold text-gray-900">
                        {testimonial.before}
                      </p>
                      <p className="text-xs text-gray-600">
                        {testimonial.beforeIncome}
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-3 border border-pink-200">
                      <p className="text-xs text-pink-700 font-bold mb-1">
                        AFTER
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {testimonial.after}
                      </p>
                      <p className="text-xs text-pink-700 font-bold">
                        {testimonial.afterIncome}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-gray-700 italic border-l-4 border-pink-600 pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              よくある質問
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "完全初心者でも大丈夫ですか？",
                a: "はい、大丈夫です。受講生の95%が初心者からのスタート。丁寧なサポートで安心して学べます。",
              },
              {
                q: "どのくらいで稼げるようになりますか？",
                a: "受講終了後、平均1〜2週間で初案件を獲得。3ヶ月で月5万円、6ヶ月で月30万円を目指せます。",
              },
              {
                q: "パソコンに詳しくないのですが…",
                a: "問題ありません。使用ツール（CapCut）は無料で、操作も簡単。動画で詳しく解説します。",
              },
              {
                q: "仕事と両立できますか？",
                a: "はい。最短3日の講座なので、スキマ時間で学習可能。多くの受講生が仕事をしながら受講しています。",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                  <span className="text-pink-600 font-black">Q</span>
                  {item.q}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed flex gap-2">
                  <span className="text-purple-600 font-black flex-shrink-0">
                    A
                  </span>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            無料説明会参加特典
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8">
            <div className="bg-white/20 backdrop-blur rounded-xl p-6 border border-white/30">
              <p className="text-2xl font-black mb-2">特典1</p>
              <p className="text-lg font-bold mb-2">
                通常 49,800円 → 特別モニター価格
              </p>
              <p className="text-4xl font-black text-yellow-300">9,800円</p>
              <p className="text-sm mt-2 text-gray-100">
                説明会参加者限定の特別価格
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur rounded-xl p-6 border border-white/30">
              <p className="text-2xl font-black mb-2">特典2</p>
              <p className="text-lg font-bold">
                プレミアムコミュニティへの<br />ご招待権付与
              </p>
              <p className="text-sm mt-4 text-gray-100">
                案件紹介、継続サポートなど<br />卒業後も安心
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <a
            href="https://luna-work.net/archives/lp/lp2-seo01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-pink-600 font-black px-10 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg shadow-xl"
          >
            LINE友だち追加で今すぐ申し込む
          </a>
          <p className="text-sm text-gray-100 mt-4">
            ※ カンタン30秒で完了。無料説明会の日程をご案内します
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "👥", label: "1,000名以上", desc: "受講実績" },
              { icon: "⭐", label: "98%", desc: "満足度" },
              { icon: "💼", label: "10,000+", desc: "案件紹介済み" },
              { icon: "📈", label: "平均3ヶ月", desc: "月5万達成" },
            ].map((badge, idx) => (
              <div key={idx}>
                <p className="text-3xl mb-2">{badge.icon}</p>
                <p className="font-black text-gray-900">{badge.label}</p>
                <p className="text-xs text-gray-600">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container text-center text-sm">
          <p className="mb-4">
            <span className="text-white font-bold">LUNA WORK</span> - 女性向けSNS動画マスター講座
          </p>
          <p className="text-xs mb-4">
            本講座で提供される内容は、動画教材、テキスト、オンライン情報等による学習機会の提供であり、個別の収益指導、案件斡旋、業務の保証、成果の代行等は含まれません。
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-white">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-white">
              特商法
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
