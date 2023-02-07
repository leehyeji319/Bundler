package com.ssafy.bundler.repository.query;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ssafy.bundler.domain.Feed;
import com.ssafy.bundler.dto.stat.StatCategoryCountDto;
import com.ssafy.bundler.dto.stat.StatMostMakeCategoryDto;
import com.ssafy.bundler.dto.stat.StatTotalCountDto;

public interface StatQueryRepository extends JpaRepository<Feed,Long> {
	@Query(value = "SELECT COUNT(f.feed_id) AS categoryMakeCount ,c.category_id as categoryId ,c.category_name as categoryName,c.category_parent_id as categoryParentId,f.feed_id "
		+ "FROM CATEGORIES c "
		+ "LEFT OUTER JOIN CATEGORIES pc ON c.category_parent_id = pc.category_id "
		+ "LEFT OUTER JOIN FEED_CATEGORY fc ON fc.category_id = c.category_id "
		+ "LEFT OUTER JOIN "
		+ "(SELECT * FROM FEEDS WHERE user_id=?1) f "
		+ "ON f.feed_id = fc.feed_id "
		+ "GROUP BY c.category_id",nativeQuery = true)
	List<StatCategoryCountDto> findFeedJoinCategory(Long userId);

	@Query(value ="SELECT COUNT(*) AS count "
		+ "from FEEDS f1_0 "
		+ "left join CARDS f1_2 on f1_0.feed_id=f1_2.card_id "
		+ "LEFT JOIN FEED_CATEGORY fc1 ON f1_0.feed_id = fc1.feed_id "
		+ "LEFT JOIN CATEGORIES c ON fc1.category_id = c.category_id "
		+ "where f1_0.user_id=?1 "
		+ "GROUP BY f1_0.user_id"
		,nativeQuery = true
	)
	StatTotalCountDto findCountByUser(Long userid);

	@Query(value = "SELECT COUNT(*) AS count "
		+ "FROM FEED_LIKE fl "
		+ "LEFT JOIN FEEDS f ON fl.feed_id = f.feed_id "
		+ "WHERE f.user_id=?1 "
		+ "GROUP BY f.user_id",nativeQuery = true)
	StatTotalCountDto findLikeTotalCountByUser(Long userId);

	@Query(value = "SELECT SUM(c.card_scrap_cnt) AS count "
		+ "FROM CARDS c "
		+ "LEFT JOIN FEEDS f ON f.feed_id = c.card_id "
		+ "WHERE f.user_id=?1 "
		+ "GROUP BY f.user_id;",nativeQuery = true)
	StatTotalCountDto findScrapCntTotalByUserId(Long userId);

	@Query(value = "SELECT COUNT(f.feed_id) AS count, c.category_id as categoryId, c.category_name as categoryName "
		+ ", IF(c.category_parent_id IS NULL, c.category_id, c.category_parent_id) AS categoryParentId "
		+ "FROM CATEGORIES c "
		+ "LEFT OUTER JOIN CATEGORIES pc ON c.category_parent_id = pc.category_id "
		+ "LEFT OUTER JOIN FEED_CATEGORY fc ON fc.category_id = c.category_id "
		+ "LEFT OUTER JOIN "
		+ "( SELECT * FROM FEEDS WHERE user_id=?1) f "
		+ "ON f.feed_id = fc.feed_id "
		+ "GROUP BY categoryParentId HAVING COUNT > 0 "
		+ "ORDER BY COUNT DESC "
		+ "LIMIT 1",nativeQuery = true)
	StatMostMakeCategoryDto findMostMakeCategory(Long userId);
@Query(value ="SELECT COUNT(f.feed_id) AS count , c.category_id as categoryId, c.category_name as categoryName, c.category_parent_id "
	+ "FROM CATEGORIES c "
	+ "LEFT OUTER JOIN FEED_CATEGORY fc ON fc.category_id = c.category_id "
	+ "LEFT OUTER JOIN (SELECT * FROM FEEDS WHERE user_id=?1) f ON f.feed_id = fc.feed_id "
	+ "WHERE c.category_parent_id IS NOT NULL  "
	+ "GROUP BY c.category_id "
	+ "HAVING count > 0 "
	+ "ORDER BY count DESC "
	+ "LIMIT 1",nativeQuery = true)
	StatMostMakeCategoryDto findMostMakeSubCategory(Long userId);

@Query(value = "SELECT COUNT(f.follow_to_id) AS COUNT "
	+ "FROM FOLLOWS f "
	+ "LEFT OUTER JOIN FOLLOWS f2 ON f.follow_to_id = f2.follow_from_id "
	+ "WHERE f.follow_from_id = ?1 AND f2.follow_to_id= ?1 "
	+ "GROUP BY f.follow_from_id",nativeQuery = true)
	StatTotalCountDto findMutualFollowCount(Long userId);
}
