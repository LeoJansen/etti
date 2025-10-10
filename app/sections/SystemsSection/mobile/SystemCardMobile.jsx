import React from 'react';

/**
 * SystemCardMobile
 * Ensures mobile-specific styling for system cards while keeping the API
 * similar to the desktop component.
 */
const SystemCardMobile = ({ index = 0, title, description, className = '', children }) => {
	const isOdd = index % 2 !== 0;

	return (
		<div
			className={`flex w-full flex-col items-center justify-start rounded-xl bg-white/90 p-6 shadow-lg backdrop-blur-sm ${
				isOdd ? 'bg-[#0a0a0a] text-white' : 'text-[#0a0a0a]'
			} ${className}`.trim()}
		>
			{title && <h3 className="text-xl font-semibold text-inherit">{title}</h3>}
			{description ? (
				<p className={`mt-4 text-center text-base ${isOdd ? 'text-gray-200' : 'text-gray-700'}`}>
					{description}
				</p>
			) : (
				children || null
			)}
		</div>
	);
};

export default SystemCardMobile;
