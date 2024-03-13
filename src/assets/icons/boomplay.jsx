export default function BoomplayIcon({ size }) {
    return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0 0 48 48"
    >
      <circle cx={24} cy={24} r={20} />
      <linearGradient
        id="a"
        x1={8.848}
        x2={39.152}
        y1={32.748}
        y2={15.252}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#05509b" />
        <stop offset={0.271} stopColor="#0083de" />
        <stop offset={0.877} stopColor="#5fd2b0" />
      </linearGradient>
      <path
        fill="url(#a)"
        d="M24 6.5C14.351 6.5 6.5 14.351 6.5 24S14.351 41.5 24 41.5 41.5 33.649 41.5 24 33.649 6.5 24 6.5zm0 33c-8.547 0-15.5-6.953-15.5-15.5S15.453 8.5 24 8.5 39.5 15.453 39.5 24 32.547 39.5 24 39.5z"
      />
      <linearGradient
        id="b"
        x1={12.796}
        x2={32.364}
        y1={28.528}
        y2={17.23}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#05509b" />
        <stop offset={0.271} stopColor="#0083de" />
        <stop offset={0.877} stopColor="#5fd2b0" />
      </linearGradient>
      <path
        fill="url(#b)"
        d="M26.663 12.004h-4.712a1.753 1.753 0 00-1.831 1.411l-.472 1.594h4.122c.903-.086 2.059.408 2.703 1.706.724 1.443.453 2.762-.506 3.25-.958.488-2.236-.043-2.96-1.48-.479-.965-.571-1.832-.14-2.546h-3.402l-2.468 8.087h5.193c1.129 0 2.729.594 3.591 2.278.969 1.893.74 3.62-.532 4.291-1.272.67-3.061 0-4.03-1.899-.735-1.432-.609-2.936-.188-3.727h-4.259s-1.601 5.652-1.627 5.856a6.026 6.026 0 00-.149.896A2.27 2.27 0 0017.259 34h3.492c4.525-.241 7.485-2.376 8.907-6.355.625-3.014-.44-4.802-3.194-5.363 0 0 3.516-1.263 4.435-4.87.502-3.176-.839-5.169-4.236-5.408z"
      />
    </svg>
    );
}