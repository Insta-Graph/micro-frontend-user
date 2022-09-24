import {
  UserLayout,
  AuthProvider,
  ThemeProvider,
  getApolloClient,
  ApolloProvider,
  authService,
} from '@snapify/shared-modules';

const Root: React.FC<{ name: string }> = ({ name }) => {
  const user = authService.getUser();
  return (
    <ApolloProvider client={getApolloClient()}>
      <ThemeProvider>
        <AuthProvider>
          <UserLayout>
            <section>
              <div className="jumbotron">
                <h1 className="display-4">{name} is mounted!</h1>
                <p className="lead">{user.firstName}</p>
                <hr className="my-4" />
                <p>{user.lastName}</p>
                <p className="lead">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="btn btn-primary btn-lg" href="#" role="button">
                    Id: {user._id}
                  </a>
                </p>
              </div>
            </section>
          </UserLayout>
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Root;
