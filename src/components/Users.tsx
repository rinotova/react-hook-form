import { usersRoute } from '../main';

function Users() {
  // const { users } = useFetchUsers();
  const users = usersRoute.useLoaderData();

  return (
    <div className='flex flex-col gap-2 items-start justify-center mx-auto w-72'>
      {users.map((user) => (
        <div
          className='p-4 bg-blue-300 border cursor-pointer drop-shadow-md text-white antialiased flex items-center justify-center hover:scale-125 transition-all w-full'
          key={user.id}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default Users;
