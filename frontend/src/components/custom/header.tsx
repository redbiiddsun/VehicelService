import { ReactElement, SVGProps } from "react";
import { AppIcon } from "../icon";

interface IHeaderProps {
	icon?: ReactElement<JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>>;
	title: string;
	description: string;
}
export default function HeaderComponent({
	icon,
	title,
	description,
}: IHeaderProps) {
	return (
		<>
			<div className="flex flex-col items-center space-y-2">
				<AppIcon className="h-8 w-8" />
				<h1 className="text-2xl font-bold">{title}</h1>
				<p className="text-gray-500 dark:text-gray-400">{description}</p>
			</div>
		</>
	);
}
