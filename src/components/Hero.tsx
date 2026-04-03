export default function Hero() {
  return (
    <section className="bg-white py-16 px-4 border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">
          Amazon アソシエイト
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          本当に良いものだけを
          <br />
          <span className="text-blue-600">厳選紹介</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          実際に試した中から選び抜いたおすすめ商品を紹介しています。
          すべてAmazonで購入可能です。
        </p>
      </div>
    </section>
  );
}
