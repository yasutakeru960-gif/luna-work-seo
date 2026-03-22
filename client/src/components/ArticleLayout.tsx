/*
 * ArticleLayout.tsx
 * Design: 信頼感重視のニュースメディアスタイル
 * - ダークネイビー × ホワイト × アンバーオレンジ
 * - 目次サイドバー + メインコンテンツ 2カラム
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface ArticleLayoutProps {
  title: string;
  description: string;
  publishDate: string;
  updateDate?: string;
  keyword: string;
  children: React.ReactNode;
  tocItems: TocItem[];
}

export default function ArticleLayout({
  title,
  description,
  publishDate,
  updateDate,
  keyword,
  children,
  tocItems,
}: ArticleLayoutProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Header */}
      <header className="bg-[#1A2E4A] text-white shadow-lg">
        <div className="container py-3 flex items-center justify-between">
          <Link href="/">
            <span className="text-lg font-bold tracking-wide cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-amber-400">LUNA WORK</span>
              <span className="text-sm font-normal ml-2 text-gray-300">情報サイト</span>
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/kuchikomi">
              <span className="hover:text-amber-400 transition-colors cursor-pointer">口コミ</span>
            </Link>
            <Link href="/salon-community">
              <span className="hover:text-amber-400 transition-colors cursor-pointer">サロンコミュニティ</span>
            </Link>
            <Link href="/hyoban">
              <span className="hover:text-amber-400 transition-colors cursor-pointer">評判</span>
            </Link>
            <Link href="/jittai">
              <span className="hover:text-amber-400 transition-colors cursor-pointer">実態</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container py-2 text-xs text-gray-500 flex gap-2">
          <Link href="/"><span className="hover:text-[#1A2E4A] cursor-pointer">ホーム</span></Link>
          <span>›</span>
          <span className="text-gray-700">{keyword}</span>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex gap-8 items-start">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Article Header */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#1A2E4A] text-white text-xs px-2 py-1 rounded font-medium">
                  {keyword}
                </span>
                <span className="text-xs text-gray-400">
                  公開: {publishDate}
                  {updateDate && <span> / 更新: {updateDate}</span>}
                </span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-[#1A2E4A] leading-tight mb-4">
                {title}
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed border-l-4 border-amber-400 pl-4 bg-amber-50 py-3 rounded-r">
                {description}
              </p>
            </div>

            {/* Mobile TOC */}
            <div className="md:hidden bg-white rounded-xl shadow-sm p-5 mb-6">
              <h2 className="text-sm font-bold text-[#1A2E4A] mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-amber-400 rounded inline-block"></span>
                この記事の目次
              </h2>
              <nav>
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`toc-link ${item.level === 3 ? "pl-6" : ""} ${
                      activeId === item.id ? "bg-[#1A2E4A]/5 text-[#1A2E4A] font-medium" : ""
                    }`}
                  >
                    {item.level === 3 && <span className="mr-1 text-gray-400">└</span>}
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>

            {/* Article Body */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 article-body">
              {children}
            </div>

            {/* CTA */}
            <div className="mt-8 bg-[#1A2E4A] rounded-xl p-6 md:p-8 text-white text-center">
              <p className="text-amber-400 font-bold text-sm mb-2">▼ まずは公式サイトをチェック</p>
              <h3 className="text-xl font-bold mb-3">LUNA WORK（ルナワーク）に興味を持ったら</h3>
              <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                まずは公式サイトで詳細を確認しましょう。モニター価格での受講や無料説明会の情報など、
                最新の募集状況をチェックしてみてください。
              </p>
              <a
                href="https://luna-work.net/archives/lp/lp2-seo01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-400 text-[#1A2E4A] font-bold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors text-base"
              >
                LUNA WORK 公式サイトを見る →
              </a>
              <p className="text-gray-500 text-xs mt-3">※ 外部サイト（LUNA WORK公式）に移動します</p>
            </div>

            {/* Related Articles */}
            <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-base font-bold text-[#1A2E4A] mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-amber-400 rounded inline-block"></span>
                関連記事
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { href: "/kuchikomi", label: "ルナワーク 口コミ", desc: "受講生の本音レビューを公開" },
                  { href: "/salon-community", label: "ルナワーク サロンコミュニティ", desc: "LUNAプレミアムの実態を解説" },
                  { href: "/hyoban", label: "ルナワーク 評判", desc: "良い評判・悪い評判を徹底検証" },
                  { href: "/jittai", label: "ルナワーク 実態", desc: "「スマホで月5万」の裏側を暴露" },
                ].map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div className="border border-gray-200 rounded-lg p-3 hover:border-[#1A2E4A] hover:bg-[#1A2E4A]/5 transition-all cursor-pointer">
                      <p className="text-sm font-medium text-[#1A2E4A]">{item.label}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </main>

          {/* Sidebar TOC (Desktop) */}
          <aside className="hidden md:block w-64 flex-shrink-0 sticky top-6">
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h2 className="text-sm font-bold text-[#1A2E4A] mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-amber-400 rounded inline-block"></span>
                目次
              </h2>
              <nav>
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`toc-link ${item.level === 3 ? "pl-6" : ""} ${
                      activeId === item.id ? "bg-[#1A2E4A]/5 text-[#1A2E4A] font-semibold" : ""
                    }`}
                  >
                    {item.level === 3 && <span className="mr-1 text-gray-400 text-xs">└</span>}
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>

            {/* Sidebar Info Box */}
            <div className="mt-4 bg-[#1A2E4A] rounded-xl p-4 text-white">
              <p className="text-xs text-amber-400 font-bold mb-2">LUNA WORK 基本情報</p>
              <table className="w-full text-xs">
                <tbody>
                  {[
                    ["運営", "株式会社ルナル"],
                    ["対象", "女性限定"],
                    ["期間", "3日間（2時間×3回）"],
                    ["価格", "9,800円〜（モニター）"],
                    ["コミュニティ", "月額4,980円〜"],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-white/10">
                      <td className="py-1.5 text-gray-400 pr-2">{label}</td>
                      <td className="py-1.5 text-white font-medium">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A2E4A] text-gray-400 mt-12 py-8">
        <div className="container text-center">
          <p className="text-sm mb-2">
            <span className="text-amber-400 font-bold">LUNA WORK 情報サイト</span>
          </p>
          <p className="text-xs">
            本サイトはLUNA WORK（ルナワーク）に関する情報を独自に調査・まとめた情報サイトです。
            公式サイトではありません。
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
