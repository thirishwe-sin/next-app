import Link from "next/link";
import React from "react";

interface user {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });
  const users: user[] = await res.json();

  return (
    <div>
      <h1>Users</h1>
      <ul className="timeline timeline-vertical">
        {users.map((user) => (
          <li key={user.id}>
            <div className="timeline-start">1984</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">{user.name}</div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
