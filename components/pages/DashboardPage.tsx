// DashboardPage — 1️⃣ wraps content in MainLayout 2️⃣ renders MemoryContainer
import MainLayout from "@/components/layouts/MainLayout";
import MemoryContainer from "@/components/containers/MemoryContainer";

export default function DashboardPage() {
  return (
    <MainLayout>
      <MemoryContainer />
    </MainLayout>
  );
}
