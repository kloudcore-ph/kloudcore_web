import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

const fieldClasses =
	'w-full rounded-lg bg-white dark:bg-inverse-surface border-2 border-off-black dark:border-paper-cream/70 px-4 py-3 font-body text-off-black dark:text-inverse-on-surface placeholder:text-off-black/60 dark:placeholder:text-inverse-on-surface/60 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30'

export function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
	return <input className={`${fieldClasses} ${className}`} {...props} />
}

export function Textarea({
	className = '',
	rows = 4,
	...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
	return <textarea rows={rows} className={`${fieldClasses} ${className}`} {...props} />
}

interface LabeledInputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string
	label: string
}

export function LabeledInput({ id, label, ...props }: LabeledInputProps) {
	return (
		<div className="space-y-2">
			<label htmlFor={id} className="block font-body font-medium">
				{label}
			</label>
			<Input id={id} {...props} />
		</div>
	)
}

interface LabeledTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	id: string
	label: string
}

export function LabeledTextarea({ id, label, ...props }: LabeledTextareaProps) {
	return (
		<div className="space-y-2">
			<label htmlFor={id} className="block font-body font-medium">
				{label}
			</label>
			<Textarea id={id} {...props} />
		</div>
	)
}
