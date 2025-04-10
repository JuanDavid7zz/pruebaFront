import toast, { Toaster } from 'react-hot-toast';

function showConfirmationToast() {
  toast.custom((t) => (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <p className="mb-3">¿Estás seguro?</p>
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => {
            toast.dismiss(t.id);
            // Lógica al cancelar
          }}
          className="px-3 py-1 text-sm bg-gray-200 rounded"
        >
          Cancelar
        </button>
        <button
          onClick={() => {
            toast.dismiss(t.id);
            toast.success("Acción confirmada!");
            // Lógica al confirmar
          }}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded"
        >
          Confirmar
        </button>
      </div>
    </div>
  ));
}

function App() {
  return (
    <div>
      <Toaster />
      <button 
        onClick={showConfirmationToast}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Mostrar Confirmación
      </button>
    </div>
  );
}