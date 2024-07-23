import { getMessagesFromDatabase } from "@/actions/get-messages-from-database";
import MessageForm from "@/components/message-form";
import Title from "@/components/title";
export const runtime = "edge";
export default async function Home() {
  const messages = await getMessagesFromDatabase();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Title text="Job Candidate Management System" />
      <MessageForm />
      <div>
        <ul>
          {messages.map((message) => {
            return <li key={message.id}>{message.message}</li>;
          })}
        </ul>
      </div>
    </main>
  );
}
