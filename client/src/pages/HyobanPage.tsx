/*
 * HyobanPage.tsx
 * キーワード: ルナワーク 評判
 */

import ArticleLayout from "@/components/ArticleLayout";

const tocItems = [
  { id: "about", text: "LUNA WORKの基本情報と特徴", level: 2 },
  { id: "good", text: "良い評判・メリット", level: 2 },
  { id: "good-1", text: "初心者でも挫折せずスキル習得", level: 3 },
  { id: "good-2", text: "営業不要で仕事がもらえる", level: 3 },
  { id: "good-3", text: "女性限定だから安心感がある", level: 3 },
  { id: "bad", text: "悪い評判・「怪しい」と言われる理由", level: 2 },
  { id: "bad-1", text: "3日間でプロになれるわけではない", level: 3 },
  { id: "bad-2", text: "本格的に稼ぐにはPCと有料ツールが必要", level: 3 },
  { id: "bad-3", text: "コミュニティの月額費用が負担", level: 3 },
  { id: "conclusion", text: "結論：怪しいスクールではないが魔法の杖でもない", level: 2 },
];

export default function HyobanPage() {
  return (
    <ArticleLayout
      title="LUNA WORK（ルナワーク）の評判を徹底検証！「怪しい」「稼げない」は本当か？"
      description="SNSや広告でLUNA WORKを見かけて、興味を持ちつつも不安を感じている方へ。良い評判だけでなく、ネガティブな意見や「稼げない」と言われる理由にも切り込み、LUNA WORKの真の姿を浮き彫りにします。"
      publishDate="2025年12月"
      updateDate="2026年3月"
      keyword="ルナワーク 評判"
      tocItems={tocItems}
    >
      <section id="about">
        <h2>LUNA WORK（ルナワーク）の基本情報と特徴</h2>
        <p>
          「LUNA WORK（ルナワーク）って最近よく聞くけど、実際の評判はどうなの？」「本当に未経験からでも稼げるようになるの？」
          SNSや広告でLUNA WORKを見かけて、興味を持ちつつも不安を感じている方は多いでしょう。特に「たった3日で動画編集が身につく」というキャッチコピーを見ると、「怪しい情報商材ではないか？」と疑ってしまうのも無理はありません。
        </p>
        <p>
          まずは、LUNA WORKがどのようなサービスなのか、簡単におさらいしておきましょう。LUNA WORKは、株式会社ルナルが運営する「女性専用のセカンドキャリア支援」を目的としたオンライン動画編集スクールです。
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mt-4 border border-gray-200">
          <p className="text-sm font-bold text-[#1A2E4A] mb-3">LUNA WORK 3つの特徴</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                num: "01",
                title: "超短期集中型",
                desc: "1回2時間×3日間の講座でSNSショート動画編集スキルを基礎から実践まで習得",
              },
              {
                num: "02",
                title: "スマホ完結（推奨はPC）",
                desc: "初心者でも取り組みやすいよう、無料アプリ（CapCut）を使用したカリキュラム",
              },
              {
                num: "03",
                title: "卒業後の案件紹介",
                desc: "有料コミュニティ（LUNAプレミアム）参加で、運営から直接案件を紹介してもらえる",
              },
            ].map((item) => (
              <div key={item.num} className="bg-white border border-gray-200 rounded-lg p-3">
                <span className="text-2xl font-black text-amber-400">{item.num}</span>
                <p className="font-bold text-[#1A2E4A] text-sm mt-1 mb-1">{item.title}</p>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="good">
        <h2>LUNA WORK（ルナワーク）の良い評判・メリット</h2>
        <p>ネット上やSNSで多く見られる、LUNA WORKのポジティブな評判をまとめました。</p>

        <h3 id="good-1">1. 「初心者でも挫折せずにスキルが身についた」</h3>
        <p>最も多いのが、カリキュラムの分かりやすさを評価する声です。</p>
        <ul>
          <li>「専門用語が一切なく、講師がスマホの画面を見せながら丁寧に教えてくれるので、機械音痴の私でも理解できました。」</li>
          <li>「1本の動画が10〜15分と短いので、家事や育児の合間に少しずつ進められたのが良かったです。」</li>
        </ul>
        <p>
          LUNA WORKは、ターゲットを「動画編集の完全未経験者」に絞り込んでいるため、徹底的にハードルを下げた学習設計がされています。これが、高い学習継続率に繋がっています。
        </p>

        <h3 id="good-2">2. 「営業不要で仕事がもらえるのが最高」</h3>
        <p>卒業後のサポート体制に対する満足度も非常に高いです。</p>
        <ul>
          <li>「クラウドワークスなどで自分で仕事を探すのは不安でしたが、LUNA WORKのコミュニティで案件を紹介してもらえるので、すぐに初報酬をゲットできました。」</li>
          <li>「運営が間に入ってくれるので、クライアントとのトラブルの心配がなく、安心して作業に集中できます。」</li>
        </ul>

        <h3 id="good-3">3. 「女性限定だから安心感がある」</h3>
        <p>女性専用コミュニティならではの居心地の良さを挙げる声も多いです。</p>
        <ul>
          <li>「講師も受講生も全員女性なので、質問しやすく、和気あいあいとした雰囲気が好きです。」</li>
          <li>「子育ての悩みや、女性特有の体調不良などにも理解があり、無理なく続けられる環境が整っています。」</li>
        </ul>
      </section>

      <section id="bad">
        <h2>LUNA WORK（ルナワーク）の悪い評判・「怪しい」と言われる理由</h2>
        <p>一方で、LUNA WORKに対してネガティブな評判や、「怪しい」といった声も存在します。その理由を深掘りしてみましょう。</p>

        <h3 id="bad-1">1. 「3日間でプロになれるわけではない」</h3>
        <p>「たった3日で稼げるようになる」という広告の表現が、一部で誤解を生んでいるようです。</p>
        <ul>
          <li>「3日間の講座を受けただけで、すぐに月収数十万円稼げるようになると思っていましたが、甘かったです。」</li>
          <li>「あくまで基礎が身につくだけで、そこから先は自分の努力次第だと感じました。」</li>
        </ul>
        <p>
          LUNA WORKの3日間講座は、あくまで「動画編集の基礎を身につけ、最初の1本を作れるようになる」ためのものです。そこからプロとして稼ぎ続けるためには、コミュニティで案件をこなしながら、継続的にスキルを磨いていく必要があります。
        </p>

        <h3 id="bad-2">2. 「本格的に稼ぐにはパソコンと有料ツールが必要」</h3>
        <p>「スマホだけでOK」という触れ込みに対して、現実とのギャップを感じる声もあります。</p>
        <ul>
          <li>「スマホでも編集はできますが、効率が悪く、細かい作業には限界があります。結局、パソコンとCapCutの有料版（Pro）を契約しました。」</li>
        </ul>
        <p>
          簡単なショート動画であればスマホでも可能ですが、案件の単価を上げたり、作業スピードを上げたりするためには、やはりパソコン環境が推奨されます。
        </p>

        <h3 id="bad-3">3. 「コミュニティの月額費用が負担になる」</h3>
        <p>卒業後の案件紹介を受けるためには、月額約4,980円の「LUNAプレミアムコミュニティ」に参加する必要があります。</p>
        <ul>
          <li>「講座の料金は安いですが、その後の月額費用が毎月かかるのは少し負担に感じます。」</li>
          <li>「案件をコンスタントにこなせない月は、月額費用で赤字になってしまうこともあります。」</li>
        </ul>
        <p>
          この月額費用を「営業代行費用」や「継続学習のための投資」と捉えられるかどうかが、LUNA WORKの評価を分けるポイントになります。
        </p>
      </section>

      <section id="conclusion">
        <h2>結論：LUNA WORKは怪しいスクールではないが、魔法の杖でもない</h2>
        <p>
          LUNA WORKの評判を総合的に検証した結果、<strong>「詐欺や怪しい情報商材ではなく、真っ当な動画編集スクール・コミュニティである」</strong>と言えます。
        </p>

        <div className="bg-[#1A2E4A]/5 border border-[#1A2E4A]/20 rounded-lg p-4 my-4">
          <p className="font-bold text-[#1A2E4A] text-sm mb-3">LUNA WORK 総合評価</p>
          <table className="w-full text-sm">
            <tbody>
              {[
                ["カリキュラムの質", "★★★★☆", "初心者向けで分かりやすい"],
                ["価格の妥当性", "★★★★★", "モニター価格は破格のコスパ"],
                ["案件紹介の充実度", "★★★★☆", "営業不要で初心者に最適"],
                ["コミュニティの雰囲気", "★★★★★", "女性限定で安心感が高い"],
                ["稼げる可能性", "★★★☆☆", "行動力次第で大きく変わる"],
              ].map(([item, stars, comment]) => (
                <tr key={item} className="border-b border-gray-200 last:border-0">
                  <td className="py-2 pr-3 text-gray-700 font-medium">{item}</td>
                  <td className="py-2 pr-3 text-amber-500 font-bold">{stars}</td>
                  <td className="py-2 text-gray-600 text-xs">{comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          「初心者でも分かりやすいカリキュラム」と「営業不要の案件紹介制度」は、これから在宅ワークを始めたい女性にとって非常に強力なサポートとなります。
        </p>
        <p>
          しかし、決して「入会すれば誰でも自動的に稼げるようになる魔法の杖」ではありません。紹介された案件に自ら応募し、納期を守って質の高い動画を納品し続けるという、<strong>「仕事に対する責任感と行動力」</strong>が不可欠です。
        </p>
        <p>
          「受け身ではなく、自ら行動してスキルを身につけ、稼ぐ力をつけたい」という強い意志を持っている女性であれば、LUNA WORKは非常に有益な環境となるでしょう。まずは無料説明会に参加し、自分に合っているかどうかを確かめてみることをおすすめします。
        </p>
      </section>
    </ArticleLayout>
  );
}
