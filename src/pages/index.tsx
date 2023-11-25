import Table from '@/components/Table/Table';
import TopBar from '@/components/TopBar/TopBar';

type IndexProps = {};

const Index: React.FC<IndexProps> = () => {
  return (
    <main className="min-h-screen bg-dark-layer-2">
      <TopBar />
      <Table
        header="QUALITY OVER QUANTITY"
        tableHeads={['Status', 'Title', 'Difficulty', 'Category', 'Solution']}
      />
    </main>
  );
};

export default Index;
