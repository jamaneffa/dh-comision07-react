import Stats from "./Stats"

export default function Statistics () {

	const metricsData = [
		{
			icon: "bi bi-film", 
			icon_color: "cornflowerblue", 
			value: "15", 
			title: "Cantidad de estrenos"
		},
		{
			icon: "bi bi-tags-fill", 
			icon_color: "orange", 
			value: "12", 
			title: "Categorias"
		},
		{
			icon: "bi bi-currency-dollar", 
			icon_color: "green", 
			value: "$ 489.567", 
			title: "Total Ventas"
		},
	]

    return (
        <section className="content">
			<h2 className="mt-3">Estadísticas</h2>
			<div className="info-boxes">

				{metricsData.map((stats, i)=> (
					<Stats 
						key={stats.value+i}   
						icon={stats.icon}
						icon_color={stats.icon_color}
						value={stats.value}
						title={stats.title}
					/>
				))}

			</div>
		</section>
    )
}