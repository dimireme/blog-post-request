import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons'

export type PreviewMode = 'hidden' | 'split' | 'full'

type PreviewModeToggleProps = {
  mode: PreviewMode;
  onToggle: () => void;
}

export default function PreviewModeToggle({ mode, onToggle }: PreviewModeToggleProps) {
  const icons = {
    hidden: faEye,
    split: [faEye, faArrowsLeftRight],
    full: faEyeSlash
  }
  
  const titles = {
    hidden: 'Показать предпросмотр',
    split: 'Развернуть предпросмотр',
    full: 'Скрыть предпросмотр'
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className="text-purple-600 hover:text-purple-700 p-1 rounded transition-colors h-8 w-8 flex items-center justify-center"
      title={titles[mode]}
    >
      {mode === 'split' ? (
        <div className="relative">
          <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
          <FontAwesomeIcon 
            icon={faArrowsLeftRight} 
            className="w-3 h-3 absolute -bottom-1 -right-1"
          />
        </div>
      ) : (
        <FontAwesomeIcon 
          icon={icons[mode]} 
          className="w-4 h-4" 
        />
      )}
    </button>
  )
} 