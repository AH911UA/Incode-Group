import styles from './styles.module.css';

export default function Arrow(props) {
    const { width = 16, height = 16, direction = 'up', style = {} } = props;

    return (
        <svg focusable="false" viewBox="0 0 24 24"
            style={style}
            className={`arrow ${styles[direction]}`}
            width={width}
            height={height}
        >
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
        </svg>
    )
}