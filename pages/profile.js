import Head from "next/head";
import ProfilePage from "../components/ProfilePage";
import PageTitle from "../components/PageTitle";
import SessionContext, {
  Provider as SessionProvider,
} from "../src/session/context";

export default function Profile() {
  return (
    <div className="px-4">
      <Head>
        <title>Perfil - MiPergamino</title>
        <meta property="og:title" content="MiPergamino" key="title" />
      </Head>
      <div className="m-auto">
        <PageTitle title="Perfil" />

        {/* <ProfilePage /> */}
        <SessionProvider>
          <SessionContext.Consumer>
            {(context) => {
              return <ProfilePage user={context.state.user} />;
            }}
          </SessionContext.Consumer>
        </SessionProvider>

        {/* <Link href="/" className="flex float-right">
          <a>Volver</a>
        </Link> */}
      </div>
    </div>
  );
}
