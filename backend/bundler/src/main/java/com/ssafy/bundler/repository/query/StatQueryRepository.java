package com.ssafy.bundler.repository.query;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ssafy.bundler.domain.Feed;
import com.ssafy.bundler.dto.stat.StatCategoryCountDto;
import com.ssafy.bundler.dto.stat.StatTotalCountDto;

public interface StatQueryRepository extends JpaRepository<Feed,Long> {
	@Query(value = "SELECT COUNT(f.feed_id) AS categoryMakeCount ,c.category_id as categoryId ,c.category_name as categoryName,c.category_parent_id as categoryParentId,f.feed_id "
		+ "FROM categories c "
		+ "LEFT OUTER JOIN categories pc ON c.category_parent_id = pc.category_id "
		+ "LEFT OUTER JOIN feed_category fc ON fc.category_id = c.category_id "
		+ "LEFT OUTER JOIN "
		+ "(SELECT * FROM feeds WHERE user_id=?1) f "
		+ "ON f.feed_id = fc.feed_id "
		+ "GROUP BY c.category_id",nativeQuery = true)
	List<StatCategoryCountDto> findFeedJoinCategory(Long userId);

	@Query(value ="SELECT COUNT(*) AS count "
		+ "from feeds f1_0 "
		+ "left join cards f1_2 on f1_0.feed_id=f1_2.card_id "
		+ "LEFT JOIN feed_category fc1 ON f1_0.feed_id = fc1.feed_id "
		+ "LEFT JOIN categories c ON fc1.category_id = c.category_id "
		+ "where f1_0.user_id=?1 "
		+ "GROUP BY f1_0.user_id"
		,nativeQuery = true
	)
	StatTotalCountDto findCountByUser(Long userid);
}
