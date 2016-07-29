export default function status(ctx, { dts }, stage, { pooled, active }) {
    // a simple status display
    ctx.globalAlpha = 1;
    ctx.font = '24px monospace';

    [{
        msg: `${Math.round(1000 / dts)}fps`,
        col: '#0ff',
    },{
        msg: `pooled: ${pooled.length.toLocaleString()}`,
        col: '#f0f',
    },{
        msg: `active: ${active.length.toLocaleString()}`,
        col: '#ff0',
    }].forEach(({ msg, col }, i) => {
        ctx.fillStyle = col;
        ctx.fillText(msg, 8, (i + 1) * 28);
    })
}
