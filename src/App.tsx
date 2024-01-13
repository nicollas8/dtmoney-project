import { useState } from "react";
import Modal from "react-modal"
import { GlobalStyle } from "./global";
import { Header } from "./components/header";
import { Dashboard } from "./components/dashboard";
import { TransactionsTable } from "./components/transactionsTable";
import { NewTransactionModal } from "./components/newTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root")

export function App() {

  const [isNewTransctionModalOpen, setIsNewTransctionModalOpen] = useState(false)

  function handleOpenNewTransctionModal () {
    setIsNewTransctionModalOpen(true)
  }
  
  function handleCloseNewTransctionModal () {
    setIsNewTransctionModalOpen(false)
  }

  return (
    <TransactionProvider>
      
      <Header onOpenNewTransactionModal={handleOpenNewTransctionModal} />
      <Dashboard/>
      <TransactionsTable/>
      <NewTransactionModal 
        isOpen={isNewTransctionModalOpen}
        onRequestClose={handleCloseNewTransctionModal}
      />
      <GlobalStyle/>
      
    </TransactionProvider>
  );
}
