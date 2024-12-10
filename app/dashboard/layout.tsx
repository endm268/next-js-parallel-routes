

export default function DashboardLayout({
  children,
  team,
  users,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  users: React.ReactNode;
}>) {
  const role = "admin";    
    return (
      <div className="p-10">
        <h1>this is the layout title</h1>
        <div>{children}</div>
        <div>{role}</div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          {role === "admin" ? <div>{team}</div> : <div>{users}</div>}
        </div>
      </div>
  );
}
