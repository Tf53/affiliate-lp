import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const discount =
    product.originalPrice
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-200">
      {/* 商品画像 */}
      <div className="relative md:w-96 shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={400}
          className="w-full h-64 md:h-full object-cover"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-bold px-4 py-1.5 rounded-full">
            {product.badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">
            {discount}%OFF
          </span>
        )}
      </div>

      {/* 商品情報 */}
      <div className="flex flex-col flex-1 p-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">{product.description}</p>

        {/* 特徴リスト */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 flex-1">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 text-sm font-bold">
                ✓
              </span>
              {feature}
            </li>
          ))}
        </ul>

        {/* 価格 + ボタン */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 pt-6 border-t border-gray-100">
          <div>
            {product.originalPrice && (
              <p className="text-gray-400 line-through text-lg mb-1">
                ¥{product.originalPrice.toLocaleString()}
              </p>
            )}
            <p className="text-4xl font-bold text-gray-900">
              ¥{product.price.toLocaleString()}
              <span className="text-base font-normal text-gray-500 ml-2">（税込）</span>
            </p>
          </div>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:ml-auto inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-10 py-4 rounded-xl transition-colors duration-200 text-center whitespace-nowrap"
          >
            Amazonで見る →
          </a>
        </div>
      </div>
    </div>
  );
}
