import {Link, useMatch, useResolvedPath} from "react-router-dom";
import cn from "classnames";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ textDecoration: match ? "underline" : "none" }}
                to={to}
                className={cn('d-block p-2 text-center link-primary', {
                    'border': match
                })}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink