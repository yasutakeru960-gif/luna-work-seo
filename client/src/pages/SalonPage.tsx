/*
 * SalonPage.tsx
 * キーワード: ルナワーク サロンコミュニティ
 */

import ArticleLayout from "@/components/ArticleLayout";

const tocItems = [
  { id: "about", text: "LUNAプレミアムとは？", level: 2 },
  { id: "merit1", text: "営業不要の案件紹介", level: 2 },
  { id: "merit2", text: "女性限定の安心感と仲間", level: 2 },
  { id: "merit3", text: "継続的なスキルアップ支援", level: 2 },
  { id: "reality", text: "本当に稼げるの？実態", level: 2 },
  { id: "recommend", text: "こんな人におすすめ", level: 2 },
  { id: "summary", text: "まとめ", level: 2 },
];

export default function SalonPage() {
  return (
    <ArticleLayout
      title="LUNA WORK（ルナワーク）のサロンコミュニティ「LUNAプレミアム」とは？女性が安心して稼げる環境を徹底解剖"
      description="LUNA WORKの卒業生限定サロンコミュニティ「LUNAプレミアム」の実態や、参加するメリット、実際にどのような仕事が紹介されているのかを詳しく解説します。これから動画編集で副業やフリーランスを目指す女性は必見です。"
      publishDate="2025年11月"
      updateDate="2026年3月"
      keyword="ルナワーク サロンコミュニティ"
      tocItems={tocItems}
    >
      <section id="about">
        <h2>LUNA WORKのサロンコミュニティ「LUNAプレミアム」の概要</h2>
        <p>
          「動画編集のスキルを学んでも、仕事が取れるか不安…」「一人で在宅ワークを続ける自信がない…」
          そんな悩みを抱える女性たちから熱い支持を集めているのが、LUNA WORK（ルナワーク）の卒業生限定サロンコミュニティ「LUNAプレミアム」です。
        </p>
        <p>
          「LUNAプレミアム」は、LUNA WORKの動画編集講座（3日間）を修了した卒業生だけが参加できる、月額制のオンラインサロンコミュニティです。
        </p>
        <p>
          一般的な動画編集スクールでは、「スキルを教えて終わり」というケースが少なくありません。卒業後は、クラウドソーシングサイトに登録し、自力で営業活動をして案件を獲得しなければならず、ここで挫折してしまう初心者が非常に多いのが現実です。
        </p>
        <p>
          しかし、LUNA WORKでは「学ぶ→繋がる→稼ぐ」という一連のプロセスをワンストップで支援することを目的としており、その「稼ぐ」部分を強力にバックアップするのがLUNAプレミアムの役割です。
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
          <p className="text-amber-800 font-bold text-sm mb-2">📌 LUNAプレミアム 基本情報</p>
          <table className="w-full text-sm">
            <tbody>
              {[
                ["参加条件", "LUNA WORK講座の修了者のみ"],
                ["月額費用", "約4,980円（2025年時点）"],
                ["主なサービス", "案件紹介・スキルアップコンテンツ・コミュニティ交流"],
                ["案件単価", "1本2,000円〜5,000円程度"],
                ["案件ジャンル", "InstagramリールやTikTok等のショート動画編集"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-amber-200 last:border-0">
                  <td className="py-2 pr-4 text-amber-700 font-medium whitespace-nowrap">{label}</td>
                  <td className="py-2 text-amber-900">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="merit1">
        <h2>メリット①：営業活動不要！運営からの直接案件紹介</h2>
        <p>
          LUNAプレミアム最大の魅力は、<strong>運営側が獲得してきた動画編集の案件を、コミュニティ内で直接紹介してもらえる</strong>という点です。
        </p>
        <p>
          「営業が苦手」「実績がないから仕事が取れない」という初心者にとって、これは非常に大きなメリットです。自分でクライアントを探し、提案文を書き、価格交渉をする…といった煩わしい営業活動を一切スキップして、すぐに「動画を作る仕事」に専念することができます。
        </p>
        <p>
          紹介される案件は、主にInstagramのReels（リール）やTikTok、YouTube Shortsなどのショート動画編集です。単価は1本あたり2,000円〜5,000円程度からスタートすることが多く、慣れてくれば1本2時間程度で制作できるようになるため、スキマ時間を活用して効率よく稼ぐことが可能です。
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
          <p className="text-blue-800 font-bold text-sm mb-2">💡 月収シミュレーション</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-blue-200">
                <th className="py-2 text-left text-blue-700">月の制作本数</th>
                <th className="py-2 text-left text-blue-700">単価（1本）</th>
                <th className="py-2 text-left text-blue-700">月収（概算）</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["5本", "3,000円", "15,000円"],
                ["10本", "3,000円", "30,000円"],
                ["17本", "3,000円", "51,000円"],
                ["20本", "5,000円", "100,000円"],
              ].map(([count, price, income]) => (
                <tr key={count} className="border-b border-blue-100 last:border-0">
                  <td className="py-2 text-blue-900">{count}</td>
                  <td className="py-2 text-blue-900">{price}</td>
                  <td className="py-2 text-blue-900 font-bold">{income}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="merit2">
        <h2>メリット②：女性限定の安心感と、仲間との繋がり</h2>
        <p>
          LUNAプレミアムは、参加者が全員女性（多くが主婦やママ、働く女性）であることも大きな特徴です。
        </p>
        <p>
          在宅ワークは孤独になりがちですが、コミュニティ内では日々の作業報告や、ちょっとした悩みの相談、有益な情報の共有などが活発に行われています。「子供が熱を出して作業が進まない…」といった、女性ならではの悩みにも共感し合える環境は、モチベーションを維持する上で非常に重要です。
        </p>
        <p>
          また、定期的にオンラインでの交流会や勉強会も開催されており、同じ目標に向かって頑張る仲間と繋がることで、「一人じゃない」という安心感を得ることができます。
        </p>
      </section>

      <section id="merit3">
        <h2>メリット③：継続的なスキルアップ支援とプロのフィードバック</h2>
        <p>
          動画編集のトレンドは日々変化しています。LUNAプレミアムでは、最新のSNSアルゴリズムや、バズる動画の構成、新しい編集テクニックなど、常に最新の情報をアップデートするための学習コンテンツが提供されます。
        </p>
        <p>
          さらに、自分が制作した動画に対して、プロの講師や先輩クリエイターから直接フィードバックをもらえる機会もあります。自分一人では気づけない改善点を指摘してもらうことで、よりクオリティの高い動画を作れるようになり、結果として単価アップや継続案件の獲得に繋がっていきます。
        </p>
      </section>

      <section id="reality">
        <h2>LUNAプレミアムの実態：本当に稼げるの？</h2>
        <p>
          「案件を紹介してもらえるのは分かったけど、本当に稼げるの？」と疑問に思う方もいるでしょう。結論から言うと、<strong>「行動すれば確実に稼げる環境」</strong>が整っています。
        </p>
        <p>
          ただし、コミュニティに所属しているだけで自動的にお金が入ってくるわけではありません。運営から案件の募集がかかった際に、自分から積極的に手を挙げて応募する必要があります。
        </p>
        <p>
          最初は簡単な案件からスタートし、納期を守り、丁寧なコミュニケーションを心がけることで、クライアント（運営）からの信頼を獲得していきます。信頼が積み重なれば、「次も〇〇さんにお願いしたい」と指名で仕事がもらえるようになり、安定した収入に繋がります。
        </p>
        <blockquote>
          「最初の3ヶ月は月2〜3万円程度でしたが、半年後には月8万円を達成できました。コミュニティのメンバーに相談しながら、少しずつ単価を上げていけたのが良かったです。」（30代・2児の母）
        </blockquote>
      </section>

      <section id="recommend">
        <h2>LUNAプレミアムはこんな人におすすめ！</h2>
        <p>LUNA WORKのサロンコミュニティ「LUNAプレミアム」は、以下のような方に最適な環境です。</p>
        <ul>
          <li>動画編集のスキルを学んだ後、どうやって仕事を取ればいいか分からない方</li>
          <li>営業活動に時間をかけず、すぐに動画制作の仕事に取り掛かりたい方</li>
          <li>孤独な在宅ワークではなく、仲間と励まし合いながら成長したい方</li>
          <li>女性特有のライフスタイル（子育てなど）に理解のある環境で働きたい方</li>
          <li>最新のSNS動画マーケティングの知識を継続的に学びたい方</li>
        </ul>
      </section>

      <section id="summary">
        <h2>まとめ：LUNAプレミアムは「稼ぎ続ける」ための最強のパスポート</h2>
        <p>
          LUNA WORKのサロンコミュニティ「LUNAプレミアム」は、単なる仲良しクラブではなく、<strong>「女性が動画編集で自立して稼ぐための実践的なプラットフォーム」</strong>です。
        </p>
        <p>
          月額費用はかかりますが、営業活動の手間を省き、安定して案件を獲得できる環境を手に入れられると考えれば、非常にコストパフォーマンスの高い投資と言えるでしょう。
        </p>
        <p>
          「動画編集で副業を始めたいけれど、一歩踏み出す勇気が出ない…」と悩んでいる方は、LUNA WORKでスキルを身につけ、LUNAプレミアムという心強いコミュニティの力を借りて、新しいキャリアをスタートさせてみてはいかがでしょうか。同じ志を持つ仲間たちが、あなたの挑戦を温かく迎えてくれるはずです。
        </p>
      </section>
    </ArticleLayout>
  );
}
