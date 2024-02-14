export const PageLogin = () => {
	return (
		<form className="mt-2 flex flex-col gap-3 w-[19rem] bg-slate-300 pt-6 px-4 pb-4 rounded-lg">
			<div className="flex gap-3">
				<label className="w-[4.5rem]" htmlFor="login">Login:</label>
				<input type="text" id="login" />
			</div>
			<div className="flex gap-3">
				<label className="w-[4.5rem]" htmlFor="password">Password:</label>
				<input id="password" type="password"/>
			</div>
			<div className="flex justify-end pr-2">
				<button className="bg-slate-200 px-2 py-1 rounded">Login</button>
			</div>
		</form>
	);
};
