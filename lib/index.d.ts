declare module 'react-modal-video' {
  interface ModalVideoProps {
    isOpen: boolean
    onClose: () => void
    channel?: "youtube" | "vimeo" | "youku" | "custom"
    videoId?: string
    url?: string
    youtube?: {
      autoplay?: 0 | 1
      cc_load_policy?: 0 | 1
      color?: "red" | "white"
      controls?: 0 | 1
      disablekb?: 0 | 1
      enablejsapi?: 0 | 1
      end?: number
      fs?: 0 | 1
      hl?: string
      iv_load_policy?: 1 | 3
      list?: string
      listType?: "playlist" | "search" | "user_uploads"
      loop?: 0 | 1
      modestbranding?: 1
      origin?: string
      playlist?: string
      playsinline?: 0 | 1
      rel?: 0 | 1
      showinfo?: 0 | 1
      start?: number
      wmode?: string
      theme?: string
      mute?: 0 | 1 
    }
    vimeo?: {
      api?: boolean
      autopause?: boolean
      autoplay?: boolean
      byline?: boolean
      callback?: string
      color?: string
      height?: number
      loop?: boolean
      maxheight?: number
      maxwidth?: number
      player_id?: string
      portrait?: boolean
      title?: boolean
      width?: number
      xhtml?: boolean
    }
    youku?: {
      autoplay?: 0 | 1
      show_related?: 0 | 1
    }
    custom?: string
    ratio?: string
    allowFullScreen?: boolean
    animationSpeed?: number
    classNames?: {
      modalVideo?: string
      modalVideoClose?: string
      modalVideoBody?: string
      modalVideoInner?: string
      modalVideoIframeWrap?: string
      modalVideoCloseBtn?: string
    }
    aria?: {
      openMessage?: string
      dismissBtnMessage?: string
    }
  }
  class ModalVideo extends React.Component<ModalVideoProps, {}>{}
  export default ModalVideo
}