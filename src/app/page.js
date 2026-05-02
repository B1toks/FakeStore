import ProductCatalog from '../components/ProductCatalog';

export const metadata = {
  title: 'Catalog',
  description: 'Browse all products from the FakeStore API.',
};

export default function HomePage() {
  return <ProductCatalog />;
}
