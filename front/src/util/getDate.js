export const getDate = time => {
	const date = new Date(time);

	const day = date.getDate().toString().padStart(2, "0");
	const mounth = (date.getMonth() + 1).toString().padStart(2, "0");
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");

	const formattedDate = `${day}.${mounth} ${hours}:${minutes}`;

	return formattedDate;
};
