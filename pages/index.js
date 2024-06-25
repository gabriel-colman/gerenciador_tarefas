import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Task Management System</title>
      </Head>
      <main>
        <h1>Bem-vindo ao Sistema de Gerenciamento de Tarefas</h1>
        <p>Faça login para começar a gerenciar suas tarefas.</p>
      </main>
    </div>
  );
}
