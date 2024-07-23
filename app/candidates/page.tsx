import { getMessagesFromDatabase } from "@/actions/get-messages-from-database";
import Title from "@/components/title";
import { Suspense } from "react";

export default async function Page() {
  const messages = await getMessagesFromDatabase();

  return (
    <section>
      <Title text="All Candidates" />

      <Suspense fallback={<p>Loading...</p>}>
        <div>
          <ul>
            {messages.map((message) => {
              return <li key={message.id}>{message.message}</li>;
            })}
          </ul>
        </div>
      </Suspense>
    </section>
  );
}
