import React from 'react'

interface Props {
    fillColor: string;
  }
  
export default function Logo(props: Props) {
  return (
    <svg width="93" height="21" viewBox="0 0 93 21" fill={props.fillColor} xmlns="http://www.w3.org/2000/svg">
    <path d="M8.55164 4.8335L18.9309 4.78922L19.3926 0.621094L7.4005 0.678018L5.90149 0.684343C1.56259 1.01324 1.18309 5.64942 1.18309 5.64942L0.5 20.1715L6.35056 20.2031L6.69843 13.2963L18.0643 13.2393L18.3237 9.10915L6.87553 9.17873C6.87553 9.17873 6.88818 7.96434 7.03365 6.60448C7.0969 5.73796 7.71675 5.02325 8.55164 4.8335Z" fill="#00A6FF"/>
    <path d="M38.5131 0.621094L37.4126 11.4557C36.7864 17.6225 35.7681 20.3549 27.8935 20.3549C21.2271 20.3549 19.1841 17.5023 19.7913 11.5126L20.8982 0.621094H26.6855L25.5596 11.772C25.2118 15.2317 25.5343 15.9464 28.0959 15.9464C30.5627 15.9464 31.4861 15.1431 31.8277 11.772L32.9535 0.621094H38.5131Z" fill="#00A6FF"/>
    <path d="M52.1305 0.632202L51.5422 6.36892C51.2639 8.27272 51.1248 10.1955 51.1248 12.1246C50.5239 10.6699 49.8155 9.41121 49.0882 7.8616L45.6347 0.632202H40.3092L38.2915 20.366H43.168L44.0029 14.4206C44.2243 12.2827 44.4963 10.3346 44.686 8.50042C45.3312 9.97413 46.0585 11.4352 46.6657 12.7571L50.0053 19.2149C50.4354 20.132 51.3841 20.6886 52.3898 20.6127C53.8888 20.6506 55.1601 19.5058 55.2803 18.0131L57.007 0.644852L52.1305 0.632202Z" fill="#00A6FF"/>
    <path d="M58.936 10.6129C58.1201 11.0494 57.5698 11.8653 57.4686 12.7887L56.9816 18.0764C56.8424 19.3224 57.7469 20.4482 58.9929 20.581C59.0941 20.5937 59.1953 20.5937 59.2965 20.5937H70.6814C72.1108 20.5747 73.2999 19.4931 73.4644 18.0764L73.9514 12.7887C74.0463 11.9159 73.6288 11.0683 72.8825 10.6129C73.6984 10.1765 74.2487 9.36061 74.3499 8.43717L74.8369 3.14953C74.976 1.90351 74.0716 0.777675 72.8256 0.644852C72.7244 0.632202 72.6232 0.632202 72.522 0.632202H61.1371C59.7076 0.651177 58.5186 1.73274 58.3541 3.14953L57.8671 8.43717C57.7785 9.31001 58.1897 10.1575 58.936 10.6129ZM62.0605 13.2315C62.1554 12.6432 62.674 12.2132 63.2686 12.2258H68.2653C68.7902 12.1879 69.252 12.58 69.2899 13.1113C69.2899 13.1492 69.2962 13.1935 69.2899 13.2315L69.0938 15.344C68.999 15.9322 68.4803 16.3686 67.8858 16.3497H62.8891C62.3641 16.3876 61.9024 15.9891 61.8644 15.4642C61.8644 15.4262 61.8581 15.3819 61.8644 15.344L62.0605 13.2315ZM62.7499 5.76805C62.8448 5.17983 63.3635 4.74973 63.958 4.76238H68.9547C69.4797 4.72443 69.9414 5.11658 69.9793 5.64787C69.9793 5.68582 69.9857 5.7301 69.9793 5.76805L69.7833 7.88057C69.6884 8.46879 69.1697 8.90521 68.5752 8.88624H63.5785C63.0535 8.92419 62.5918 8.53204 62.5539 8.00075C62.5539 7.9628 62.5475 7.91852 62.5539 7.88057L62.7499 5.76805Z" fill="#00A6FF"/>
    <path d="M77.0254 10.6129C76.2094 11.0494 75.6592 11.8653 75.558 12.7887L75.071 18.0764C74.9318 19.3224 75.8363 20.4482 77.0823 20.581C77.1835 20.5937 77.2847 20.5937 77.3859 20.5937H88.7644C90.1939 20.5747 91.383 19.4931 91.5474 18.0764L92.0344 12.7887C92.1293 11.9159 91.7119 11.0683 90.9655 10.6129C91.7814 10.1765 92.3317 9.36061 92.4329 8.43717L92.9199 3.14953C93.0591 1.90351 92.1546 0.777675 90.9086 0.644852C90.8074 0.632202 90.7062 0.632202 90.605 0.632202H79.2201C77.7907 0.651177 76.6016 1.73274 76.4371 3.14953L75.9501 8.43717C75.8552 9.31001 76.2727 10.1575 77.0254 10.6129ZM80.1435 13.2315C80.2384 12.6432 80.7571 12.2132 81.3516 12.2258H86.3483C86.8733 12.1879 87.335 12.58 87.3729 13.1113C87.3729 13.1492 87.3793 13.1935 87.3729 13.2315L87.1769 15.344C87.082 15.9322 86.5634 16.3686 85.9688 16.3497H80.9721C80.4471 16.3876 79.9854 15.9955 79.9475 15.4642C79.9475 15.4262 79.9412 15.3819 79.9475 15.344L80.1435 13.2315ZM80.833 5.76805C80.9278 5.17983 81.4465 4.74973 82.041 4.76238H87.0377C87.5627 4.72443 88.0244 5.11658 88.0624 5.64787C88.0624 5.68582 88.0687 5.7301 88.0624 5.76805L87.8663 7.88057C87.7714 8.46879 87.2528 8.90521 86.6582 8.88624H81.6615C81.1366 8.92419 80.6748 8.53204 80.6369 8.00075C80.6369 7.9628 80.6306 7.91852 80.6369 7.88057L80.833 5.76805Z" fill="#00A6FF"/>
    </svg>
  )
}
