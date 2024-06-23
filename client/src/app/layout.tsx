"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "../../state-manager/store";

import "../../styles/style.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="image/png" href="/next.svg" />
        <title>Task Manager</title>
      </head>
      <body suppressHydrationWarning>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            {typeof window === undefined ? null : <>{children}</>}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
