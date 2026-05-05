export default function ViewPictureModal({ imageSrc, isOpen, onClose }) {
    if (!isOpen || !imageSrc) return null;

    return (
        <div 
            className="fixed inset-0 w-screen h-screen bg-black/80 flex items-center justify-center z-50" 
            onClick={() => {onClose();}}
        >
            <button
                className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300 transition-colors w-12 h-12 rounded-full flex items-center justify-center bg-black/30 hover:bg-black/50"
                onClick={() => {
                    onClose();
                }}
            >
                &times;
            </button>
            <img
                src={imageSrc}
                alt="Enlarged view"
                className="max-w-[90vw] max-h-[90vh] object-contain cursor-zoom-out hover:brightness-90 transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}
