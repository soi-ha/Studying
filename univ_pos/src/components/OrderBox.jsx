import './OrderBox.scss';
import { useState } from 'react';
export default function OrderBox({ number, gitem, uitem, citem }) {
	const [done, setDone] = useState('');
	return (
		<div className={`order-box ${done}`}>
			<div className="order-number">120번</div>
			<div className="ob-group" style={{ fontWeight: '700' }}>
				<div className="ob-item">메뉴</div>
				<div className="ob-price">수량</div>
			</div>
			<div className="ob-group">
				<div className="ob-item">금성 에이드</div>
				<div className="ob-price">1</div>
			</div>
			<div className="ob-group">
				<div className="ob-item">유니버스 에이드</div>
				<div className="ob-price">{uitem}</div>
			</div>
			<div className="ob-group">
				<div className="ob-item">천왕성 에이드</div>
				<div className="ob-price">{citem}</div>
			</div>
			<div className="ob-btn-group">
				<div
					className="ob-btn"
					onClick={() => {
						setDone('done');
					}}
				>
					판매 완료
				</div>
				<div
					className="ob-btn"
					onClick={() => {
						setDone('');
					}}
				>
					취소
				</div>
			</div>
		</div>
	);
}
