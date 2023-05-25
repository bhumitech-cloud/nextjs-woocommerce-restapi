/**
 * Internal Dependencies.
 */
import { getPathNameFromUrl, sanitize } from '../../../utils/miscellaneous';
import { getIconComponentByName } from '../../../utils/icons-map';

/**
 * External Dependencies.
 */
import { isEmpty, isArray } from 'lodash';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = ( { footer } ) => {
	
	const { copyrightText, footerMenuItems, sidebarOne, sidebarTwo, socialLinks } = footer || {};
	const [ isMounted, setMount ] = useState( false );
	
	
	useEffect( () => {
		setMount( true );
	}, [] );
	
	return (
		<footer className="footer bg-customPink py-2 text-center">
			<p className="text-white text-base mb-0">© Copyright 2023 Beauty Barn India. All Rights Reserved.</p>
		</footer>
	);
};

export default Footer;
