'use client';

import * as React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, HomeOutlined,BarsOutlined  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import { Avatar, Badge, Space } from 'antd';


const items: MenuProps['items'] = [
	{
		label: <Badge count={5} size='small'>Home</Badge>,
		key: 'home',
		icon: <HomeOutlined />,
	},
	{
		label: 'About',
		key: 'about',
		icon: <AppstoreOutlined />,
	},
	{
		label: 'Category',
		key: 'SubMenu',
		icon: <BarsOutlined />,
		children: [
			{
				type: 'group',
				label: 'Project',
				children: [
					{
						label: 'Angular',
						key: 'angular',
					},
					{
						label: 'React',
						key: 'react',
					},
				],
			},
			{
				type: 'group',
				label: 'FrontEnd',
				children: [
					{
						label: 'Javascript',
						key: 'javascipt',
					},
					{
						label: 'HTML',
						key: 'html',
					},
				],
			},
		],
	},
];

export interface HeaderPageProps {}

export default function HeaderPage(props: HeaderPageProps) {
	const [current, setCurrent] = useState('home');

	const onClick: MenuProps['onClick'] = (e) => {
		console.log('click ', e);
		setCurrent(e.key);
	};

	return (
		<>
			<div className="header__menu">
				<div className='container__logo'>
					<h2>MINH TAM</h2>
					<Image
						src="/assets/logo_nobg.png"
						alt="Vercel Logo"
						className={styles.vercelLogo}
						width={30}
						height={30}
						priority
					/>
				</div>
				<Menu className='container__menu' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
				<style jsx>{`
					.header__menu {
						display: flex;
						width: 100%;
						justify-content: space-between;
						align-items: center;
						padding: 10px;
					}

					.container__logo {
						display: flex;
						align-items: center;
						gap: 10px
					}

					.container__menu {
						width: 100%;
					}
				`}</style>
			</div>
		</>
	);
}
