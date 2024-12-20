export default function HorizontalLine({
    className,
    ref,
}) {
    return (
        <g opacity="1" style={{ transform: 'translateX(100%)' }} className={className} ref={ref}>
            <line y1="-0.5" x2="80" y2="-0.5" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 222 280)" stroke="url(#paint2_linear_3976_80666)" />
        </g>
    )
}