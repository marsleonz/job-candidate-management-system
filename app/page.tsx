import MessageForm from "@/components/message-form";
import Title from "@/components/title";
export const runtime = "edge";
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Title text="Job Candidate Management System" />
      <MessageForm />
    </main>
  );
}
