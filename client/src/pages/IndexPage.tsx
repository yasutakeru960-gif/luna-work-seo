/*
 * IndexPage.tsx
 * トップページ - 4記事へのナビゲーション
 */

import { Link } from "wouter";

const articles = [
  {
    href: "/kuchikomi",
    keyword: "ルナワーク 口コミ",
    title: "LUNA WORK（ルナワーク）の口コミは本当？受講生の本音から見えたメリット・デメリットを徹底解説",
    desc: "受講生のリアルな声をもとに、良い口コミ・悪い口コミを包み隠さず解説。どんな人に向いているのかも詳しく紹介します。",
    color: "border-blue-500",
    badge: "bg-blue-600",
  },
  {
    href: "/salon-community",
    keyword: "ルナワーク サロンコミュニティ",
    title: "LUNA WORKのサロンコミュニティ「LUNAプレミアム」とは？女性が安心して稼げる環境を徹底解剖",
    desc: "卒業生限定コミュニティの実態、案件紹介の仕組み、月収シミュレーションまで詳しく解説します。",
    color: "border-green-500",
    badge: "bg-green-600",
  },
  {
    href: "/hyoban",
    keyword: "ルナワーク 評判",
    title: "LUNA WORK（ルナワーク）の評判を徹底検証！「怪しい」「稼げない」は本当か？",
    desc: "「怪しい」と言われる理由と、それに対する実態を検証。総合評価を星5段階で公開します。",
    color: "border-amber-500",
    badge: "bg-amber-600",
  },
  {
    href: "/jittai",
    keyword: "ルナワーク 実態",
    title: "LUNA WORK（ルナワーク）の実態を暴露！「スマホで月5万」の裏側と受講生のリアルな声",
    desc: "「スマホで月5万」の広告の裏側にある真実を徹底解説。月5万達成に必要な作業量も公開。",
    color: "border-red-500",
    badge: "bg-red-600",
  },
];

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Header */}
      <header className="bg-[#1A2E4A] text-white shadow-lg">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">
                <span className="text-amber-400">LUNA WORK</span>
                <span className="text-sm font-normal ml-2 text-gray-300">情報サイト</span>
              </h1>
              <p className="text-xs text-gray-400 mt-0.5">ルナワークに関する口コミ・評判・実態を徹底解説</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-[#1A2E4A] pb-12 pt-8">
        <div className="container text-center text-white">
          <p className="text-amber-400 text-sm font-bold mb-2">LUNA WORK 完全ガイド</p>
          <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
            ルナワークを検討中の方へ<br />
            <span className="text-amber-400">リアルな情報</span>をお届けします
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
            口コミ・評判・実態・サロンコミュニティについて、受講生の本音をもとに徹底解説。
            受講前に知っておくべき情報をすべてまとめました。
          </p>
        </div>
      </div>

      {/* Articles */}
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link key={article.href} href={article.href}>
              <div className={`bg-white rounded-xl shadow-sm border-t-4 ${article.color} p-6 hover:shadow-md transition-shadow cursor-pointer h-full`}>
                <span className={`${article.badge} text-white text-xs px-2 py-1 rounded font-medium`}>
                  {article.keyword}
                </span>
                <h3 className="text-base font-bold text-[#1A2E4A] mt-3 mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {article.desc}
                </p>
                <p className="text-amber-600 text-sm font-bold mt-4">記事を読む →</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-10 bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h2 className="text-lg font-bold text-[#1A2E4A] mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-amber-400 rounded inline-block"></span>
            LUNA WORK（ルナワーク）とは？
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            LUNA WORK（ルナワーク）は、株式会社ルナルが運営する女性専用のオンライン動画編集スクールです。「女性のセカンドキャリア支援」を掲げ、主にInstagramやTikTokなどのSNSショート動画編集スキルを、最短3日間で習得できるカリキュラムを提供しています。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            最大の特徴は、スクール卒業後に「LUNAプレミアム」という月額制のコミュニティに参加することで、運営から直接動画編集の案件を紹介してもらえる点です。自分で営業活動をする必要がないため、初心者でも安心して仕事を始めることができます。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {[
              { label: "受講期間", value: "最短3日間" },
              { label: "対象者", value: "女性限定" },
              { label: "使用ツール", value: "CapCut（無料）" },
              { label: "案件単価", value: "2,000〜5,000円/本" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[#1A2E4A]/5 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-500 mb-1">{label}</p>
                <p className="text-sm font-bold text-[#1A2E4A]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A2E4A] text-gray-400 mt-8 py-8">
        <div className="container text-center">
          <p className="text-sm mb-2">
            <span className="text-amber-400 font-bold">LUNA WORK 情報サイト</span>
          </p>
          <p className="text-xs">
            本サイトはLUNA WORK（ルナワーク）に関する情報を独自に調査・まとめた情報サイトです。公式サイトではありません。
          </p>
          <div className="flex justify-center gap-4 mt-4 text-xs">
            <Link href="/kuchikomi"><span className="hover:text-white cursor-pointer">口コミ</span></Link>
            <Link href="/salon-community"><span className="hover:text-white cursor-pointer">サロンコミュニティ</span></Link>
            <Link href="/hyoban"><span className="hover:text-white cursor-pointer">評判</span></Link>
            <Link href="/jittai"><span className="hover:text-white cursor-pointer">実態</span></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
