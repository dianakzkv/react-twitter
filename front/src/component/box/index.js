import "./index.css";

export default function Component({ children, className, style = {} }) {
	return (
		<div style={style} className={`box ${className}`}>
			{children}
		</div>
	);
}
