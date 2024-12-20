export default function RightVerticalLine({
    className,
    ref,
}) {
    return (
        <g opacity="1" style={{ transform: 'translateY(100%)' }} className={className} ref={ref}>
            <line y1="-0.5" x2="80" y2="-0.5" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 1227 323)" stroke="url(#paint3_linear_3976_80666)" />
        </g>
    )
}