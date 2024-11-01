
//  function Box({
// 	style = {},
// 	className = '',
//   size,
// 	...otherProps //it returned the children property which has the inner text written in it
// }: React.ComponentProps<'div'> & {size ?: 'small'|'large'|'medium'} ){
//   console.log(otherProps)
//   const sizeClassName = size ? `box--${size}` : ''
//   return (
// 		<div
// 			className={['box',className,sizeClassName].filter(Boolean).join(' ')}
// 			style={{ fontStyle: 'italic', ...style }}
// 			{...otherProps}
// 		/>
// 	)
// }

// function App() {
// 	return (
// 		<div>
// 			<Box size="small" className="box--small">
// 				small lightblue box
// 			</Box>
// 			<Box className="box--medium">
// 				medium pink box
// 			</Box>
// 			<Box className="box--large">
// 				large orange box
// 			</Box>
// 			<Box>sizeless colorless box</Box>
// 		</div>
// 	)
// }


// import { ErrorBoundary, type FallbackProps} from 'react-error-boundary'

// function Onboarding() {
// 	function logFormData(formData: FormData) {
// 			console.log(Object.fromEntries(formData))
// 	}

// 	return (
		
// 		<form action={logFormData} >
// 			<div>
// 				<label htmlFor="usernameInput">Username:</label>
// 				<input id="usernameInput" name="username" />
// 			</div>
// 				<div>
// 				<label htmlFor="passwordInput">Password:</label>
// 				<input id="passwordInput" name="password" type="password" />
// 			    </div>
			
			
// 			<div>
// 				<label htmlFor="ageInput">Age:</label>
// 				<input id="ageInput" name="age" type="number" min="0" max="200" />
// 			</div>
// 			<div>
// 				<label htmlFor="photoInput">Photo:</label>
// 				<input id="photoInput" name="photo" type="file" accept="image/*" />
// 			</div>
// 			<div>
// 				<label htmlFor="colorInput">Favorite Color:</label>
// 				<input id="colorInput" name="color" type="color" />
// 			</div>
// 			<div>
// 				<label htmlFor="startDateInput">Start Date:</label>
// 				<input id="startDateInput" name="startDate" type="date"  defaultValue={ 
// 					new Date().toISOString().slice(0, 10)}/>
// 			</div>
//       <div>
// 				<label>
//         <input  name="wavier" type="checkbox" />
//           Wavier Signed
//           </label>
		
// 			</div>
// 			<button type="submit">Submit</button>
// 		</form>
// 	)
// }

// function ErrorFallBack(props: FallbackProps){
// 	return (
// 		<div role='alert'>
// 			<p>Something went wrong:</p>
// 		<pre style={{color:'red'}}>{props.error.message}</pre>
// 		</div>
		
// 	)
// }

// function App(){
// 	return(
//      <ErrorBoundary FallbackComponent={ErrorFallBack}>
// 		<Onboarding/>
// 	 </ErrorBoundary>
// 	)
// }

// import { useState } from 'react'
// const allItems = [
// 	{ id: 'apple', value: '🍎 apple' },
// 	{ id: 'orange', value: '🍊 orange' },
// 	{ id: 'grape', value: '🍇 grape' },
// 	{ id: 'pear', value: '🍐 pear' },
// ]

// function App() {
// 	const [items, setItems] = useState(allItems)

// 	function addItem() {
// 		const itemIds = items.map(item => item.id)
// 		const itemToAdd = allItems.find(item => !itemIds.includes(item.id))
// 		if (itemToAdd) setItems([...items, itemToAdd])
// 	}

// 	function removeItem(id: string) {
// 		setItems(items.filter(item => item.id !== id))
// 	}

// 	return (
// 		<div className="keys">
// 			<button disabled={items.length >= allItems.length} onClick={addItem}>
// 				add item
// 			</button>
// 			<ul>
// 				{items.map(item => (
// 					// 🐨 add a key prop to the <li> below. Set it to item.id
// 					// 💣 you can then delete this eslint-disable line:
// 					// eslint-disable-next-line react/jsx-key
// 					<li key={item.id.toString()}>
// 						<button onClick={() => removeItem(item.id)}>remove</button>{' '}
// 						<label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
// 						<input id={`${item.id}-input`} defaultValue={item.value} />
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	)
// }

import { useEffect, useState } from 'react'
import {
	type BlogPost,
	generateGradient,
	getMatchingPosts,
} from '../shared/blog-posts'
import { setGlobalSearchParams } from '../shared/utils'

function getQueryParam() {
	const params = new URLSearchParams(window.location.search)
	return params.get('query') ?? ''
}

function App() {
	// 🐨 add the useState for the query here (lift it up from the Form)
	const [query, setQuery] = useState(getQueryParam)

		// 🐨 move this up to the App as well
		useEffect(() => {
			const updateQuery = () => setQuery(getQueryParam())
			window.addEventListener('popstate', updateQuery)
			return () => {
				window.removeEventListener('popstate', updateQuery)
			}
		}, [])
	return (
		<div className="app">
			{/* 🐨 pass the query and setQuery to the form */}
			<Form query={query} setQuery={setQuery}/>
			{/* 🐨 pass the query to this prop */}
			<MatchingPosts query={query}/>
		</div>
	)
}

// 🐨 update the Form props to accept query and setQuery
function Form({query, setQuery}:{query:string; setQuery: (query:string)=>void}) {
	// 🐨 lift this up to the App
	

	const words = query.split(' ').map(w => w.trim())

	const dogChecked = words.includes('dog')
	const catChecked = words.includes('cat')
	const caterpillarChecked = words.includes('caterpillar')



	function handleCheck(tag: string, checked: boolean) {
		const newWords = checked ? [...words, tag] : words.filter(w => w !== tag)
		setQuery(newWords.filter(Boolean).join(' ').trim())
	}

	return (
		<form action={() => setGlobalSearchParams({ query })}>
			<div>
				<label htmlFor="searchInput">Search:</label>
				<input
					id="searchInput"
					name="query"
					type="search"
					value={query}
					onChange={e => setQuery(e.currentTarget.value)}
				/>
			</div>
			<div>
				<label>
					<input
						type="checkbox"
						checked={dogChecked}
						onChange={e => handleCheck('dog', e.currentTarget.checked)}
					/>{' '}
					🐶 dog
				</label>
				<label>
					<input
						type="checkbox"
						checked={catChecked}
						onChange={e => handleCheck('cat', e.currentTarget.checked)}
					/>{' '}
					🐱 cat
				</label>
				<label>
					<input
						type="checkbox"
						checked={caterpillarChecked}
						onChange={e => handleCheck('caterpillar', e.currentTarget.checked)}
					/>{' '}
					🐛 caterpillar
				</label>
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}


function MatchingPosts({ query }: { query: string }) {
	const matchingPosts = getMatchingPosts(query)
	const [favorites, setFavorites] = useState<Array<string>>([])
	return (
		<ul className="post-list">
			{matchingPosts
				.sort((a, b) => {
					// 🐨 determine whether post a and b are included in favorites
					const aFav =  favorites.includes(a.id)
					const bFav =  favorites.includes(b.id)
					return aFav === bFav ? 0 : aFav ? -1 : 1 //agr dono hi nhi han yn dono hain to 0 return tak sort ko lge k dono equal hain wrna agr afav true ha mtlb a favourites ma ha to -1 return means a pehle ana chahiye.
				})
				.map(post => (
					<Card
						key={post.id}
						post={post}
						isFavorited={favorites.includes(post.id)}
                        onFavoriteClick = {(favorite)=>{
							favorite ?setFavorites([...favorites,post.id]) :setFavorites(favorites.filter(w=> w!==post.id))
							
						}}
					/>
				))}
		</ul>
	)
}

// 🐨 add props for isFavorited and onFavoriteClick
function Card({ post, isFavorited, onFavoriteClick }: { post: BlogPost; isFavorited: Boolean; onFavoriteClick: (favorite: Boolean)=>void }) {
	
	return (
		<li>
			{isFavorited ? (
				<button
					aria-label="Remove favorite"
					// 🐨 call onFavoriteClick
					onClick={() => onFavoriteClick(false)}
				>
					❤️
				</button>
			) : (
				// 🐨 call onFavoriteClick
				<button aria-label="Add favorite" onClick={() => onFavoriteClick(true)}>
					🤍
				</button>
			)}
			<div
				className="post-image"
				style={{ background: generateGradient(post.id) }}
			/>
			<a
				href={post.id}
				onClick={event => {
					event.preventDefault()
					alert(`Great! Let's go to ${post.id}!`)
				}}
			>
				<h2>{post.title}</h2>
				<p>{post.description}</p>
			</a>
		</li>
	)
}





export default App
