import PocketBase from "pocketbase";

import Grid from "@/components/Dashboard/Grid";

const pb = new PocketBase("http://127.0.0.1:8090");

export default async function Dashboard() {
  return (
    <>
      <main className="container">
        <div className="my-6">
          <Grid />
        </div>
      </main>
    </>
  );
}
