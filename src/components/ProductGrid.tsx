import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          おすすめ商品一覧
        </h2>
        <p className="text-center text-gray-500 mb-12">
          厳選した商品をAmazonで購入できます
        </p>
        <div className="flex flex-col gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <p className="text-center text-gray-400 text-xs mt-10">
          ※ 当サイトはAmazonアソシエイトプログラムに参加しています。
          商品リンクをクリックして購入すると、当サイトに報酬が発生する場合があります。
          価格・在庫状況はAmazonの販売ページでご確認ください。
        </p>
      </div>
    </section>
  );
}
